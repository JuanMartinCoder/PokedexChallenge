import React ,{ useEffect, useState } from "react";
import axios from "axios";

import './App.css';

//Components Imports
import PaginationWrapper from "./components/pagination/PaginationWrapper";

function App() {

  const pagelimit = 5;
  const initial_url = 'https://pokeapi.co/api/v2/pokemon/?offset0&limit='+pagelimit;
  
  //State
  const [data, setData] = useState([]);
  const [nextLink, setNextsLink] = useState('');
  const [previousLink, setPreviousLink] = useState('');
  const [isloading, setLoading] = useState(true);
  
  
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




  return (
    <div className="App">

      {
        isloading 
        ?  
        
        null 
        
        :
        <div className="centeredWrapper">
          <PaginationWrapper 
        data={data.results}
        cantidadPokemons={data.count} 
        isloading={isloading} 
        pagelimit={pagelimit} 
        
        />

        {
          previousLink == null ? <button disabled={true} onClick={goPreviousPage}>
                                   
                                 </button>
          : 
                                <button  onClick={goPreviousPage}>
                                  
                              </button>
        }
        <button onClick={goNextPage}>
               
        </button>
        </div>
      }
      
    </div>
  );
}

export default App;
