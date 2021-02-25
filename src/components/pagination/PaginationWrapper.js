import React, {useState} from 'react'
import PokemonsList from "../pokemons/PokemonsList";
import './pagStyle.css'

export default function PaginationWrapper({data,cantidadPokemons,isloading,pagelimit}){
    
    const [pages,setPages] = useState(Math.round(cantidadPokemons/pagelimit));
    
    
    return (
        <div className="pagwrapper">
    
                <PokemonsList 
                data={data}
                isloading={isloading}         
                />
                

        </div>
    )
}
