import React, {useState} from 'react'
import PokemonsList from "../pokemons/PokemonsList";

export default function PaginationWrapper({data,cantidadPokemons,isloading,pagelimit}){
    
    const [pages,setPages] = useState(Math.round(cantidadPokemons/pagelimit));
    
    
    return (
        <div>
    
                <PokemonsList 
                data={data}
                isloading={isloading}         
                />
                

        </div>
    )
}
