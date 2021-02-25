import React from 'react'

import './pokemons.css'

export default function PokemonsList({ data , isloading}) {
    return (
        <div>
            {
                isloading ? null: data.map((pokemon,id) => (
                    <div key={id} className="pokemon">
                        {pokemon.name}
                    </div>
                ))
            }
        </div>
    )
}
