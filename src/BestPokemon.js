import React from "react";

export default function BestPokemon({ abilities }) {

    return (<div>
        <p>My favorite Pokemon is Pikachu</p>
        <ul>{abilities.map((el, index) => {
            return (<li key={index}>{el}</li>)
        })}</ul>
    </div>)
}
