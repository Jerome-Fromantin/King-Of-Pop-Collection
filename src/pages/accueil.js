import { Link } from "react-router-dom"
import '../styles/accueil.css'

const Accueil = () => {
    return (<main className="accueilMain">
        <h2>Bienvenue à vous au royaume du&nbsp;"King&nbsp;Of&nbsp;Pop"&nbsp;!</h2>
        <div className="accueilText">
            <p><span className="accueilTextTitle">NOTICE</span></p>
            <p>Ce site web est conçu et maintenu par <strong>Jérôme Fromantin, développeur front-end junior</strong> qui y
            présentera en images la collection d'objets divers réunis au cours des ans par ce dernier au sujet du "King Of
            Pop", Michael&nbsp;Jackson.</p>
            <p><strong>"King Of Pop Collection"</strong> est un travail en cours qui est très loin d'être terminé.
            Aucune photographie des pièces de collection n'est présente pour le moment et seule la première page,
            concernant les disques et cassettes, est totalement remplie (au niveau des informations descriptives), les
            pages des autres catégories étant actuellement vides.</p>
            <p>Cependant, cette première page présente en quelques infos chacune des pièces possédées (253 en tout&nbsp;!)
            et il est possible de les <strong>trier en fonction de l'album</strong> (ou du type d'album&nbsp;: compilation,
            Jacksons, posthume...) <strong>ou du support (CD, vinyle, cassette).</strong></p>
            <p>De plus, chacune de ces pièces possède sa propre page dans laquelle se trouve de nombreuses informations
            complémentaires, parmi lesquelles la liste des chansons disponibles.</p>
            <p>DERNIÈRE MISE À JOUR<br/>*****
            <br/>Amélioration des infos de chaque pièce de collection dans sa propre page&nbsp;: carte 91 à 100 (époque
            "Bad").</p>
            <p>PROCHAINES MISES À JOUR<br/>*****
            <br/>Amélioration des infos de chaque pièce de collection dans sa propre page&nbsp;: carte 101 à 253.
            <br/>Ajout des images correspondantes&nbsp;: Toutes les cartes.</p>
        </div>
        <div className="accueilCard">
            <div className="accueilPhoto">Image à venir...</div>
            <p><span className="accueilNom">Disques et cassettes</span></p>
            <p className="accueilInfos">
                Tout (ou presque) de sa carrière musicale
                <br/>publié sur vinyles, CD ou cassettes audio
                <br/>entre 1967 et 2018...
                <br/><span style={{color: "green"}}>PAGE COMPLÈTE !</span>
            </p>
            <Link to="/disques" className="accueilLink">Allons-y !</Link>
        </div>
        <div className="accueilCard">
            <div className="accueilPhoto">Image à venir...</div>
            <p><span className="accueilNom">Vidéos</span></p>
            <p className="accueilInfos">
                Clips, cérémonies filmées
                <br/>ou passages TV divers,
                <br/>vous retrouverez cela ici.
                <br/><span style={{color: "red"}}>PAGE VIDE !</span>
            </p>
            <Link to="/videos" className="accueilLink">Allons-y !</Link>
        </div>
        <div className="accueilCard">
            <div className="accueilPhoto">Image à venir...</div>
            <p><span className="accueilNom">Livres</span></p>
            <p className="accueilInfos">
                De très nombreux livres
                <br/>ont été écrits à son sujet.
                <br/>En voici quelques-uns.
                <br/><span style={{color: "red"}}>PAGE VIDE !</span>
            </p>
            <Link to="/livres" className="accueilLink">Allons-y !</Link>
        </div>
        <div className="accueilCard">
            <div className="accueilPhoto">Image à venir...</div>
            <p><span className="accueilNom">Revues et magazines</span></p>
            <p className="accueilInfos">
                Magazines génériques,
                <br/>presse pour ados ou revues de fans,
                <br/>c'est ici que ça se trouve.
                <br/><span style={{color: "red"}}>PAGE VIDE !</span>
            </p>
            <Link to="/revues" className="accueilLink">Allons-y !</Link>
        </div>
        <div className="accueilCard">
            <div className="accueilPhoto">Image à venir...</div>
            <p><span className="accueilNom">Calendriers</span></p>
            <p className="accueilInfos">
                Pour être tout au long de l'année
                <br/>avec Michael Jackson,
                <br/>rien de mieux qu'un calendrier !
                <br/><span style={{color: "red"}}>PAGE VIDE !</span>
            </p>
            <Link to="/calendriers" className="accueilLink">Allons-y !</Link>
        </div>
        <div className="accueilCard">
            <div className="accueilPhoto">Image à venir...</div>
            <p><span className="accueilNom">Divers</span></p>
            <p className="accueilInfos">
                De la statuette au bloc-notes
                <br/>en passant par la montre,
                <br/>tout un tas d'objets différents...
                <br/><span style={{color: "red"}}>PAGE VIDE !</span>
            </p>
            <Link to="/divers" className="accueilLink">Allons-y !</Link>
        </div>
    </main>)
}

export default Accueil
