import '../styles/layout.css'
import { useState } from 'react'

function Footer() {
    const [inputValue, setInputValue] = useState("")

    return (<footer>
        <div className="footer-test">Pour les fans de Michael Jackson...</div>
        <div className="footer-test">Laissez-moi votre e-mail :
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}
            onBlur={(e) =>{
                e.preventDefault()
                if (!inputValue.includes("@") && !inputValue.includes(".")) {
                    alert('Attention, il n\'y a ni @ ni ".", ceci n\'est pas une adresse valide.')
                }
                else if (!inputValue.includes("@") && inputValue.includes(".")) {
                    alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide.")
                }
                else if (inputValue.includes("@") && !inputValue.includes(".")) {
                    alert('Attention, il n\'y a pas de ".", ceci n\'est pas une adresse valide.')
                }
                else {
                    alert("Votre adresse semble valide, merci !")
                }
            }} className="footerInput"/>
        </div>
    </footer>)
}

export default Footer