import '../styles/disques.css'

function Albums({albums, setActiveAlbum, setActiveSupport}) {
    // Cette fonction réinitialise toutes les catégories, albums ou supports.
    function resetAll() {
        setActiveAlbum("")
        setActiveSupport("")
    }

    return (
        <div className="allAlbums">
            <div className="triTitle">Tri par album ou type d'album</div>
            <div className="albums">
                {albums.map((album) => (
                    <span key={album} className="album" onClick={(e) => setActiveAlbum(album)}>{album}</span>
                ))}
            </div>
            <button className="resetButton" onClick={() => resetAll()}>
                Réinitialiser les albums<br/>ou les supports
            </button>
        </div>
    )
}

export default Albums
