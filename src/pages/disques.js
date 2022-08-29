import React, { lazy, Suspense, useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { getDisques } from '../services/servicesDisques'
import '../styles/disques.css'
import '../styles/pagination.css'
import Loader from '../composants/Loader'

// Lazy loading
const Present = lazy(() => import('../composants/DisquesPresent'))
const Albums = lazy(() => import('../composants/Albums'))
const Supports = lazy(() => import('../composants/Supports'))
const Pagination = lazy(() => import('../composants/Pagination'))

function RecordsList() {
    // Cette fonction permet d'ouvrir la page à 370 px du haut à chaque nouveau rendu.
    window.scrollTo(0, 370)

    // Cette fonction permet de récupérer les données du fichier JSON.
    const [disques, setDisques] = useState([])
    useEffect(
        () => {
            async function fetchData() {
                const data = await getDisques()
                setDisques(data)
            }
            fetchData()
        }, []
    )

    // Cette fonction permet de sélectionner un album ou type d'album.
    const [activeAlbum, setActiveAlbum] = useState("")

    // Cette fonction extrait la liste des albums et crée un nouveau tableau avec cette liste.
    const albums = disques.reduce(
        (acc, record) =>
            acc.includes(record.album) ? acc : acc.concat(record.album),
        []
    )
    
    // Cette fonction permet de sélectionner un support.
    const [activeSupport, setActiveSupport] = useState("")

    // Cette fonction extrait la liste des supports et crée un nouveau tableau avec cette liste.
    const supports = disques.reduce(
        (acc, record) =>
            acc.includes(record.support) ? acc : acc.concat(record.support),
        []
    )

    // Cette fonction est appelée à chaque choix d'album.
    function openActiveAlbum(album) {
        // Réinitialise le support actif (au cas où un support a été choisi juste avant).
        setActiveSupport("")
        // Réinitialise la pagination à la première page.
        setCurrentPage(1)
        // Ouvre l'album actif.
        setActiveAlbum(album)
    }

    // Cette fonction est appelée à chaque choix de support.
    function openActiveSupport(support) {
        // Réinitialise l'album actif (au cas où un album a été choisi juste avant).
        setActiveAlbum("")
        // Réinitialise la pagination à la première page.
        setCurrentPage(1)
        // Ouvre le support actif.
        setActiveSupport(support)
    }

    // Ces variables sont utilisées à plusieurs occasions.
    const albName = albums.filter(album => !activeAlbum || activeAlbum === album)
    const supName = supports.filter(support => !activeSupport || activeSupport === support)

    // Cette fonction affiche le cadre avec le nom de la catégorie choisie et le nombre de cartes correspondantes.
    function getNameAndCount() {
        // Si aucun album n'a été choisi...
        if (albName.length !== 1) {
            // ... et si aucun support n'a été choisi...
            if (supName.length !== 1) {
                // ... cela retourne ces phrases-ci.
                return (<div className="nameAndCount">
                    <p className="albsupName">Toutes les catégories</p>
                    <p className="albsupCount">Actuellement <span className="goldCount">{disques.length}</span> cartes
                    en tout...</p>
                </div>)
            }
            // ... mais si un support a été choisi, cela retourne le résultat en fonction du support choisi.
            return (<div className="nameAndCount">
                <p className="albsupName">{supName}</p>
                <p className="albsupCount">Actuellement&nbsp;
                <span className="goldCount">{disques.filter(({support}) => !activeSupport || activeSupport === support).length}</span>
                &nbsp;cartes sur <span className="goldCount">{disques.length}</span> en tout...</p>
            </div>)
        }
        // Sinon, si un album a été choisi, cela retourne le résultat en fonction de l'album choisi.
        return (<div className="nameAndCount">
            <p className="albsupName">{albName}</p>
            <p className="albsupCount">Actuellement&nbsp;
            <span className="goldCount">{disques.filter(({album}) => !activeAlbum || activeAlbum === album).length}</span>
            &nbsp;cartes sur <span className="goldCount">{disques.length}</span> en tout...</p>
        </div>)
    }

    // Cette fonction sélectionne les cartes à afficher en fonction du tri (ou non) et du nombre de pages.
    let pageSize = 30 // Nombre de cartes par page complète.
    const [currentPage, setCurrentPage] = useState(1)
    const currentData = useMemo(() => {
        // firstPicIndex est l'index de la première carte de chaque page.
        const firstPicIndex = (currentPage - 1) * pageSize
        // lastPicIndex est l'index de la dernière carte de chaque page + 1.
        const lastPicIndex = firstPicIndex + pageSize
        if (albName.length !== 1) {
            if (supName.length !== 1) {
                // La méthode "slice()" utilise ici 2 paramètres.
                // Le premier est inclus dans le tableau retourné, mais pas le second.
                // Exemple pour la page 1 : Paramètres à (0, 30) mais indexs des cartes retournées à (0, 29).
                return disques.slice(firstPicIndex, lastPicIndex)
            }
            return disques.filter(({support}) => !activeSupport || activeSupport === support).slice(firstPicIndex, lastPicIndex)
        }
        return disques.filter(({album}) => !activeAlbum || activeAlbum === album).slice(firstPicIndex, lastPicIndex)
    }, [currentPage, pageSize, albName.length, supName.length, disques, activeAlbum, activeSupport])
    
    // Cette fonction affiche le composant de pagination avec le nombre de pages nécessaires.
    function getPagination() {
        if (albName.length !== 1) {
            if (supName.length !== 1) {
                return (
                    <Suspense fallback={<Loader/>}>
                        <Pagination currentPage={currentPage} totalCount={disques.length}
                        pageSize={pageSize} onPageChange={page => setCurrentPage(page)}/>
                    </Suspense>
                )
            }
            return (
                <Suspense fallback={<Loader/>}>
                    <Pagination currentPage={currentPage}
                    totalCount={disques.filter(({support}) => !activeSupport || activeSupport === support).length}
                    pageSize={pageSize} onPageChange={page => setCurrentPage(page)}/>
                </Suspense>
            )
        }
        return (
            <Suspense fallback={<Loader/>}>
                <Pagination currentPage={currentPage}
                totalCount={disques.filter(({album}) => !activeAlbum || activeAlbum === album).length}
                pageSize={pageSize} onPageChange={page => setCurrentPage(page)}/>
            </Suspense>
        )
    }

    // Cette fonction affiche toutes les cartes désignées par les fonctions ci-dessus.
    function getCards() {
        if (albName.length !== 1) {
            if (supName.length !== 1) {
                return (<div>
                    {currentData.map(({album, id, photo, name, support, year, contentYear}) =>
                    !activeAlbum || activeAlbum === album ? (
                    <div key={id} className="card">
                        <div className="photo"><img src={photo} alt={name} className="pic"/></div>
                        {/* Pour un import provisoire en local de l'image ci-dessus,
                        remplacer src={photo} par src={require("../assets/images/disques/Nom-img.jpg")} */}
                        <div className="cardId">{id}</div>
                        <p className="name">{name}</p>
                        <div><span className="info">Support :</span> {support}</div>
                        <div><span className="info">Année de publication :</span> {year}</div>
                        <div><span className="info">Année(s) du contenu :</span> {contentYear}</div>
                        <div className="linkDiv"><Link to={id} className="disquesLink">Plus d'infos</Link></div>
                    </div> ) : null
                    )}
                </div>)
            }
            return (<div>
                {currentData.map(({id, photo, name, support, year, contentYear}) =>
                !activeSupport || activeSupport === support ? (
                <div key={id} className="card">
                    <div className="photo"><img src={photo} alt={name} className="pic"/></div>
                    <div className="cardId">{id}</div>
                    <p className="name">{name}</p>
                    <div><span className="info">Support :</span> {support}</div>
                    <div><span className="info">Année de publication :</span> {year}</div>
                    <div><span className="info">Année(s) du contenu :</span> {contentYear}</div>
                    <div className="linkDiv"><Link to={id} className="disquesLink">Plus d'infos</Link></div>
                </div> ) : null
                )}
            </div>)
        }
        return (<div>
            {currentData.map(({album, id, photo, name, support, year, contentYear}) =>
            !activeAlbum || activeAlbum === album ? (
            <div key={id} className="card">
                <div className="photo"><img src={photo} alt={name} className="pic"/></div>
                <div className="cardId">{id}</div>
                <p className="name">{name}</p>
                <div><span className="info">Support :</span> {support}</div>
                <div><span className="info">Année de publication :</span> {year}</div>
                <div><span className="info">Année(s) du contenu :</span> {contentYear}</div>
                <div className="linkDiv"><Link to={id} className="disquesLink">Plus d'infos</Link></div>
            </div> ) : null
            )}
        </div>)
    }

    return (<div>
        {/* "Suspense" (de React) indique ce qui doit être affiché pendant le chargement du composant. */}
        <Suspense fallback={<Loader/>}>
            <Present/>
        </Suspense>
        {/*
        <Albums/> affiche la liste des albums ou types d'albums.
        <Supports/> affiche la liste des supports.
        {getNameAndCount()} affiche le nom de la catégorie et le nombre de cartes correspondantes.
        {getPagination()} affiche le composant de pagination.
        {getCards()} affiche la liste des cartes triées selon la catégorie, avec certaines de leurs propriétés.
        */}
        <div>
            <Suspense fallback={<Loader/>}>
                <Albums albums={albums} setActiveAlbum={openActiveAlbum}/>
                <Supports supports={supports} setActiveSupport={openActiveSupport}/>
            </Suspense>
            <div className="list">
                {getNameAndCount()}
                {getPagination()}
                {getCards()}
                {getPagination()}
            </div>
        </div>
    </div>)
}

export default RecordsList
