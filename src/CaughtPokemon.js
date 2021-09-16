import React, { useState } from "react";
const CaughtPokemon = ({ date }) => {
    let [caught, setcaught] = useState(['Pikachu']);

    const pokemonCaught = () => {
        // setcaught([...caught, "volbasour"]);
        setcaught((state) => [...state, "volbasour"]);
    }


    return (
        <div>
            <button onClick={pokemonCaught}>Pokemon caught</button>
            <ul>
                {caught.map((item, index) => {
                    return <li key={index}>{item}</li>
                })}
            </ul>
            <p>Caught {caught} Pokémon on {date}</p>
        </div>
    )
}
export default CaughtPokemon