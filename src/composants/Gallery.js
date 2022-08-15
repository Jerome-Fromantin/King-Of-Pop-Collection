import React from 'react'
import Previous from '../assets/images/Previous.png'
import Next from '../assets/images/Next.png'

class Gallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {currentPicIndex: 0}
    }
    
    render() {
        const {currentPicIndex} = this.state
        const pictures = this.props.photos
        const length = pictures?.length

        /* Fonction pour cliquer sur la photo précédente. */
        /* Si l'index en cours est différent de 0, on enlève 1. Sinon, on le remet au max. */
        const clickPrev = () => {
            this.setState((prevState) => ({
                currentPicIndex: prevState.currentPicIndex !== 0 ? prevState.currentPicIndex - 1 : prevState.currentPicIndex = length - 1
            }))
        }

        /* Fonction pour cliquer sur la photo suivante. */
        /* Si l'index en cours est différent du max, on ajoute 1. Sinon, on le remet à 0. */
        const clickNext = () => {
            this.setState((prevState) => ({
                currentPicIndex: prevState.currentPicIndex !== length - 1 ? prevState.currentPicIndex + 1 : prevState.currentPicIndex = 0
            }))
        }

        return (<div className="wholeGallery">
            {/* S'il y a plusieurs images dans la galerie, la flèche gauche est affichée.
            S'il n'y en a qu'une seule, la flèche n'est pas affichée. */}
            {pictures.length > 1 ?
                <div className="galleryArrowsDiv">
                    <img id="previous" src={Previous} alt="Précédent" onClick={clickPrev}/>
                </div> : null
            }

            <div className="galleryCenter">
                {/* S'il y a des images, on affiche celle avec l'index en cours. Sinon, on affiche la galerie vide. */}
                {pictures.length > 0 ?
                    <div className="gallery">
                        {<img src={pictures[currentPicIndex]} alt="Disque" className="galleryPicture"/>}
                    </div> :
                    <div className="gallery">
                        <p>Les images pour cette carte<br/>n'existent pas encore...</p>
                    </div>
                }
                {/* S'il y a une ou plusieurs images dans la galerie, on affiche le numéro de la photo sur le nombre total
                de photos.
                S'il n'y en a pas, on n'affiche rien. */}
                {pictures.length > 0 ?
                    <div className="galleryNumero">{currentPicIndex + 1}/{length}</div> : null
                }
            </div>
            
            {/* S'il y a plusieurs images dans la galerie, la flèche droite est affichée.
            S'il n'y en a qu'une seule, la flèche n'est pas affichée. */}
            {pictures.length > 1 ?
                <div className="galleryArrowsDiv">
                    <img id="next" src={Next} alt="Suivant" onClick={clickNext}/>
                </div> : null
            }
        </div>)
    }
}

export default Gallery
