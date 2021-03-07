import React from 'react'
import PokemonsList from "../pokemons/PokemonsList";
import './pagStyle.css'

export default function PaginationWrapper({data,isloading,searchPokemon}){
    
    
    
    
    return (
        <div className="pagwrapper">
                <h1 className="pokemonTitle">Pokemons</h1>
                <PokemonsList 
                data={data}
                isloading={isloading}  
                searchPokemon={searchPokemon}    
                />

        </div>
    )
}
