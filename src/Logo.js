import React from "react"


function Logo({ appName }) {
    return (
        <header>
            <h1>{appName}</h1>
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png" alt="imagen" />
        </header>

    )

}
export default Logo;