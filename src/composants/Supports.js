import '../styles/disques.css'

function Supports({supports, setActiveSupport}) {
    return (
        <div className="allSupports">
            <div className="triTitle">Tri par support</div>
            <div className="supports">
                {supports.map((support) => (
                    <span key={support} className="support" onClick={(e) => setActiveSupport(support)}>{support}</span>
                ))}
            </div>
        </div>
    )
}

export default Supports
