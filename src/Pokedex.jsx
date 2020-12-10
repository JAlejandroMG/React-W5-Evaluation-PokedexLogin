import React, {useState, useEffect} from 'react';
import Card from './components/card/card';
import Pagination from './components/pagination';
import pokeTypes from './databases/pokeTypes';
import pokeColors from './databases/pokeColors';


export default function Pokedex() {
  const [pokemones, setPokemones] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  // const [pokemonPerPage, setPokemonPerPage] = useState(12);
  // const [pokemonLimit, setPokemonLimit] = useState(893);
  const pokemonPerPage = 12;
  const pokemonLimit = 893;
  // } //Hay un máximo de 893 imágenes de Pokemon disponibles y pokemonPerPage debe ser múltiplo de 3


  useEffect(() => {
    // componentDidMount
    const limit = pokemonPerPage;
    const url = 'https://pokeapi.co/api/v2/pokemon';
    //Consumir la API de pokeapi
    const getPokemones = async () => {
      try {
        const response = await fetch(`${url}?limit=${limit}`);
        const data = await response.json();
        await setPokemones(data.results);
      } catch(error) {
          console.log(error.message);
      }

      (pokemonLimit % pokemonPerPage) === 0 ? setPageLimit(pokemonLimit/pokemonPerPage) : setPageLimit((Math.floor(pokemonLimit/pokemonPerPage) + 1));
    };
    getPokemones();
    // eslint-disable-next-line
  }, []);


  const getNumber = (index) => {
    let id = (index + 1) + ((currentPage - 1) * pokemonPerPage);
    return id;
  }

  const getImage = (id) => {
    let pokemonImg = "";

    if(id < 10){
        pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${id}.png`;
    }else if(id >= 10 && id < 100){
        pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/0${id}.png`;
    }else{
        pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`;
    }

    return pokemonImg;
  }

  const fetchPage = async (requestPage) => {
    try {
      //1. Completar el método para poder obtener los pokemones dependiendo de la página solicitada
      let limit = 0;
      if(requestPage === pageLimit) {
        limit = pokemonLimit % pokemonPerPage;
      } else {
         await setCurrentPage(requestPage);
        limit = pokemonPerPage;
      }

      const url = 'https://pokeapi.co/api/v2/pokemon';
      const response = await fetch(`${url}?limit=${limit}&offset=${(requestPage - 1) * pokemonPerPage}`);
      const data = await response.json();
      await setPokemones(data.results);
      await setCurrentPage(requestPage);
    } catch (error) {
      console.log(error);
    }
  };

  // const updatePokemonPerPage = (event) => {
  //   const newValue = parseInt(event.target.value);
  //   setPokemonPerPage(newValue);
  //   // event.preventDefault();
  // };


  return (
    <div className="contains-all">
      <div className="above-container">
        <div className="container">
          <div className="pokedex-header">
            {
            /* PENDIENTE
            <div className="input">
              <form>
                <input value={`${this.state.pokemonPerPage}`} type="number" onChange={this.updatePokemonPerPage}></input>
              </form>
            </div> */
            }
            <div className="pokedex-header-img"></div>
          </div>
          <div className="pokedex-container">
            {                
              pokemones.map( (pokemon, index) => {      
                //2. Solucionar el problema de obtener las imagenes de los pokemones con id < 10, > 10, > 100
                const pokemonNumber = getNumber(index);
                const pokemonImg = getImage(pokemonNumber); // Se usaba index
                const pokemonTypes = pokeTypes[pokemonNumber-1];
                const pokemonColors = pokemonTypes.map(type => {            
                                        return pokeColors[type]; // No funciona como pokeColors.type
                                      });
                
                let colors = [];
                pokemonColors.length===1 ? colors = [pokemonColors[0], pokemonColors[0]] : colors = [pokemonColors[0], pokemonColors[1]] ;
                // let pokemonImg = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${index + 1}.png`
                return (
                  <Card key={index + 1} number={pokemonNumber} name={pokemon.name} img={pokemonImg} colors={colors} />
                );
              })
            }
          </div>
          <div className="pokedex-pagination">
            <Pagination currentPage={currentPage} pokemonPerPage={pokemonPerPage} pokemonLimit={pokemonLimit} fetchPageFn={fetchPage} pageLimit={pageLimit}/>
          </div>
        </div>
      </div>
    </div>
  );
}
