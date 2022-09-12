import React, { lazy, Suspense, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate, useParams } from 'react-router'
import { getDisque } from '../services/servicesDisques'
import '../styles/disque.css'
import Loader from '../composants/Loader'

// Lazy loading
const Gallery = lazy(() => import('../composants/Gallery'))

function Record(props) {
    // Cette fonction permet d'ouvrir la page à 370 px du haut à chaque nouveau rendu.
    window.scrollTo(0, 370)

    const [disque, setDisque] = useState({description: [], morePhotos: [], songContent: []})
    const param = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchData() {
            const id = param.id
            const record = await getDisque(id)
            if (!record) {
                navigate("/page404")
            }
            else {setDisque(record)}
        }
        fetchData()
    }, [navigate, param.id])

    const {id, support, supportType, name, singer, album, year, contentYear, reference, contentType, originCountry,
    maker, description, morePhotos, songContent} = disque

    // Les 2 fonctions suivantes permettent d'accéder à la carte précédant ou suivant la carte en cours.
    // La carte précédant la première est la dernière, la carte suivant la dernière est la première.
    function getPreviousCard() {
        let moins = parseInt(id) - 1
        if (moins === 0) {moins = 253}
        return moins
    }
    function getNextCard() {
        let plus = parseInt(id) + 1
        if (plus === 254) {plus = 1}
        return plus
    }

    return (<div>
        <Suspense fallback={<Loader/>}>
            <Gallery photos={morePhotos}/>
        </Suspense>
        <div className="indivPageTitleDiv">
            <Link to={"/disques/" + getPreviousCard()} className="prevNextCard">Carte<br/>précédente</Link>
            <h2 className="indivPageH2">
                <div className="h2Div">
                    <span className="indivPageTitle">{name}</span><br/>
                    <span className="indivPageName">({singer})</span>
                </div>
            </h2>
            <Link to={"/disques/" + getNextCard()} className="prevNextCard">Carte<br/>suivante</Link>
        </div>
        <main className="indivPageMain">
            <section className="cardInfos">
                <p className="cardInfosTitle">Carte n°{id}</p>
                <p className="cardInfosParag"><span className="infosData">Album ou type d'album : </span>{album}
                <br/><span className="infosData">Support : </span>{support}
                <br/><span className="infosData">Type de support : </span>{supportType}
                <br/><span className="infosData">Année de publication : </span>{year}
                <br/><span className="infosData">Année(s) du contenu : </span>{contentYear}
                <br/><span className="infosData">Type de contenu : </span>{contentType}
                <br/><span className="infosData">Pays d'origine : </span>{originCountry}
                <br/><span className="infosData">Fabricant : </span>{maker}
                <br/><span className="infosData">Référence du fabricant : </span>{reference}
                <br/><span className="infosData">Description : </span>{description}</p>
            </section>
            <section className="cardSongs">
                <p className="cardSongsTitle">Chansons</p>
                {/* Ci-dessous, méthode de React qui assigne automatiquement une clé à chaque élément. */}
                {React.Children.toArray(songContent.map((item, id) => {
                    return id <= 8 ? item.songYear ? (
                    <div className="cardSongsParag">
                        <span>
                            <span className="songsId">0{id + 1}/.</span> {item.songTitle}
                            <span className="songYear"> [{item.songYear}]</span>
                        </span>
                        <span className="songSinger">{item.songSinger}</span>
                    </div>
                    ) : (
                        <div className="cardSongsParag">
                            <span><span className="songsId">0{id + 1}/.</span> {item.songTitle}</span>
                            <span className="songSinger">{item.songSinger}</span>
                        </div>
                        )
                    : item.songYear ? (
                    <div className="cardSongsParag">
                        <span>
                            <span className="songsId">{id + 1}/.</span> {item.songTitle}
                            <span className="songYear"> [{item.songYear}]</span>
                        </span>
                        <span className="songSinger">{item.songSinger}</span>
                    </div>
                    ) : (
                        <div className="cardSongsParag">
                            <span><span className="songsId">{id + 1}/.</span> {item.songTitle}</span>
                            <span className="songSinger">{item.songSinger}</span>
                        </div>
                        )
                }))}
            </section>
        </main>
    </div>)
}

export default Record
