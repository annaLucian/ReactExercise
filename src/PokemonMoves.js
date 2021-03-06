
import React, { useState, useEffect } from "react";


function PokemonMoves(props) {
    const [pokemonData, setPokemonData] = useState(null);

    useEffect(() => {

        fetch(
            `https://pokeapi.co/api/v2/pokemon/${props.pokemonId}/`
        )
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                console.log("Loading")
                setPokemonData(data)

            });
    }, [props.pokemonId]);

    if (pokemonData) {
        return (
            <div>
                <p>{pokemonData.name}'s moves:</p>

                <ul>
                    {pokemonData.moves ?
                        pokemonData.moves.map((move, index) => {
                            return <li key={index}>{move.move.name}</li>
                        }) : console.log("Loading")}
                </ul>
                <p>{pokemonData.name}'s abilities:</p>
                <ul>
                    {pokemonData.abilities.map((ability, index) => {
                        return <li key={index}>{ability.ability.name}</li>


                    })}
                </ul>
            </div>
        );
    } else {
        return null;
    }
}

export default PokemonMoves;
