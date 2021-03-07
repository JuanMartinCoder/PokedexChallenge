import React from 'react'


import './pokemons.css'

export default function PokemonsList({ data ,isloading,searchPokemon}) {

  
    return (
        <div className="pokemonlist">
            {
                isloading ? null: data.map((pokemon,id) => (
                    <a key={id} className="pokemon" href="#" onClick={()=>searchPokemon(pokemon.url)}>
                        {pokemon.name}
                    </a>
                ))
            }
        </div>
    )
}
