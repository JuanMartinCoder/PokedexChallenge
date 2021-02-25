import React from 'react'

export default function PokemonsList({ data , isloading}) {
    return (
        <div>
            {
                isloading ? null: data.map((pokemon,id) => (
                    <div key={id}>
                        {pokemon.name}
                    </div>
                ))
            }
        </div>
    )
}
