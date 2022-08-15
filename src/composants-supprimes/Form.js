/* NOTE IMPORTANTE */
/**
* Si ce composant est réutilisé, il doit être mis dans le dossier "composants".
* De plus, il faut rajouter dans le fichier Layout.js :
* - import Form from '../composants/Form'
* - dans return () : <Form/>
*/

import '../styles/layout.css'
import { useState } from 'react'

function Form() {
    const [inputValue, setInputValue] = useState("Tapez votre texte")
    // Le "state" local permet de garder des infos spécifiques à un composant et provenant d'une interaction.
    // On crée la variable "inputValue" et la fonction qui va changer sa valeur dans le state local avec "useState",
    // en donnant la valeur par défaut.
    const inputError = inputValue.includes("vax")
    const inputError2 = inputValue.includes("f")
    const inputError3 = !inputValue
    // Ces 3 variables considèrent comme erreur soit d'entrer "vax" dans le champ, soit d'entrer "f",
    // soit d'avoir un champ vide.
    // Si l'une des erreurs est activée, le message correspondant ci-dessous s'affiche.

    return (<form>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="form"/>
        {/* Ci-dessous, l'élément qui suit "&&" n'est créé que si la condition qui précède est vérifiée. */}
        {(inputError && <span>Le mot "vax" est interdit, petit mouton !</span>) ||
        (inputError2 && <span>Le "f" est interdit !</span>) ||
        (inputError3 && <span>Le champ est vide !</span>)}<br/>
        <button onClick={(e) => {
            e.preventDefault()
            alert(inputValue)}
        } className="form">Alertez-moi !</button>
    </form>)

    /* Les lignes ci-dessous interceptent carrément la valeur en empêchant de l'entrer.
    // Ici, le "f" n'apparaîtra jamais, et donc son message non plus.
    // Fonction de vérification de la valeur entrée.
    function checkValue(value) {
        if (!value.includes("f")) {
            setInputValue(value)
        }
    }

    return (<form>
        <input type="text" value={inputValue} onChange={(e) => checkValue(e.target.value)}/>
        {(inputError && <span>Le mot "vax" est interdit, petit mouton !</span>) ||
        (inputError2 && <span>Le "f" est interdit !</span>)}<br/>
        <button onClick={(e) => {
            e.preventDefault()
            alert(inputValue)}
        }>Alertez-moi !</button>
    </form>)*/
}

export default Form