



import React from 'react'

import './pokemons.css'

import { GiAxeSword,GiHearts ,GiCrossShield,GiSwordsPower,GiEyeShield,GiRun} from "react-icons/gi";

export default function PokemonsList({data}) {

    const {base_stat, stat} = data;

    
  
    return (
        <li className="liStat">
            {
                stat.name === 'hp' ? <GiHearts className="heart"/> : null
            
            }{
                stat.name === 'attack' ? <GiAxeSword className="attack"/> : null
            }
            {
                stat.name === 'defense' ? <GiCrossShield className="deffense"/> : null
            }
            {
                stat.name === 'special-attack' ? <GiSwordsPower className="special-attack"/> : null
            }
            {
                stat.name === 'special-defense' ? <GiEyeShield className="special-defense"/> : null
            }
            {
                stat.name === 'speed' ? <GiRun className="speed"/> : null
            }
            {/*
            <p className="name">
            {stat.name}
            </p>
            */}
            <p className="base_stat">
            
            {base_stat}
            </p>
        </li>
    )
}
