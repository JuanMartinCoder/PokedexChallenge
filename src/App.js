import React ,{ useEffect, useState } from "react";
import axios from "axios";

import './App.css';
import { IoIosArrowForward, IoIosArrowBack, IoIosHeart } from "react-icons/io";

//Components Imports
import PaginationWrapper from "./components/pagination/PaginationWrapper";
import PokemonStat from "./components/pokemons/PokemonStat";


function App() {

  const pagelimit = 5;
  const initial_url = 'https://pokeapi.co/api/v2/pokemon/?offset0&limit='+pagelimit;
  
  //State
  const [data, setData] = useState([]);
  const [nextLink, setNextsLink] = useState('');
  const [previousLink, setPreviousLink] = useState('');
  const [isloading, setLoading] = useState(true);
  const [pokemonData , setPokemonData] = useState();  
  const [language, setLanguage] = useState('en');
  
  useEffect(()=>{
    //There are 1118 pokemons, so the pagination will need n pages
    // pages = Number(data.count / 5)
    //Because it will show 5 pokemons pew page
    axios.get(initial_url)
    .then(function (response) {
      setData(response.data);
      setNextsLink(response.data.next);
      
      setPreviousLink(response.previous);
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      setLoading(false);
    });  
// eslint-disable-next-line
  },[])


  function goNextPage(e){
    e.preventDefault();
    axios.get(nextLink)
    .then(function (response) {
      setData(response.data);
      setNextsLink(response.data.next);
      setPreviousLink(response.data.previous);
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {

      setLoading(false);
    });
  }

  function goPreviousPage (e){
    e.preventDefault();
    axios.get(previousLink)
    .then(function (response) {
      setData(response.data);
      setNextsLink(response.data.next);
      setPreviousLink(response.data.previous);
      
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      setLoading(false);
    });
  }


  function searchPokemon (url){
        
    axios.get(url)
    .then(function (response) {
        
        setPokemonData(response.data);
   
    })
    .catch(function (error) {
      console.log(error);
    })
    .then(function () {
      
    });
}




  return (
    <div className="App">
      <div className="tituloWrapper">
        <h1 className="tituloPrincipal">Pokedex Challenge</h1>
      </div>
      {
        isloading 
        ?  
        
        null 
        
        :
        <div className="centeredWrapper">
          <div className="pokemonList">
                <PaginationWrapper 
              data={data.results}
              cantidadPokemons={data.count} 
              isloading={isloading} 
              pagelimit={pagelimit} 
              setPokemonData={setPokemonData}
              searchPokemon={searchPokemon}
              />
            <div className="buttonWrapper">
              {
                previousLink == null ? <button disabled={true} onClick={goPreviousPage} className="buttonclasss">
                                        <IoIosArrowBack className="buttons"/>
                                      </button>
                : 
                                      <button  onClick={goPreviousPage} className="buttonclasss">
                                      <IoIosArrowBack className="buttons"/>
                                    </button>
              }
              <button onClick={goNextPage} className="buttonclasss">
              <IoIosArrowForward className="buttons"/>
              </button>
              </div>
          </div>
          <div className="pokemonAbilities">
              {pokemonData===undefined ? 
                null
                :
                <div className="pokemonData">
                <h1 className="pokemonDataTitle">{pokemonData.name}</h1>
                <img className="pokemonImg" src={pokemonData.sprites.front_default} alt={pokemonData.name} />
                <div className="pokemonAbilitiesList">
                <h2 className="pokemonAbilitiesListTitle">Abilities</h2>
                <ul className="ulListAbilities">
                  {pokemonData.abilities.map((ability, id)=>(
                  <li className="liListAbilities" key={id}>{ability.ability.name}</li>
                  ))}
                </ul>
                </div>
                <div className="pokemonStatsList">
                <h2 className="pokemonStatsListTitle">Stats</h2>
                <ul className="ulListAbilities">
                  {pokemonData.stats.map((stat, id)=>(
                  <PokemonStat key={id}data={stat}/>
                  ))}
                </ul>
                </div>
                
                  
                </div>
              }
          </div>
        </div>
        }
      <div className="footer">

      </div>
    </div>
  );
}

export default App;
