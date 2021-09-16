import React from "react"


function Logo(props) {

    return (
        <header>
            <h1>{props.appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="imagen" onClick={props.handleClick} />
        </header>

    )




}
export default Logo;