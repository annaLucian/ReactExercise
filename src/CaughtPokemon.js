import React, { useEffect, useState } from "react";
const CaughtPokemon = ({ date }) => {
    let [caught, setCaught] = useState(['Pikachu']);
    const [pokemonNameInput, setPokemonNameInput] = useState("");

    const pokemonCaught = () => {
        // setcaught([...caught, "volbasour"]);
        if (pokemonNameInput === "") {
            return;
        }
        setCaught((state) => [...state, pokemonNameInput]);
        setPokemonNameInput("")
    }
    function handleInputChange(event) {
        setPokemonNameInput(event.target.value)
        console.log(pokemonNameInput)
    }


    return (
        <div>
            <input type="text" value={pokemonNameInput} onChange={handleInputChange} />
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