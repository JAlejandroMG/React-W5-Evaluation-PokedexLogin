import React, {useState, useEffect} from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import PokemonData from './pokemonData/pokemonData';
import './pokemonDetail.css';

export default function PokemonDetail() {
  const location = useLocation();
  const history = useHistory();
  const [showData, setShowData] = useState(false);
  const [pokemonStats, setPokemonStats] = useState([]);
  const [pokemonTypes, setPokemonTypes] = useState([]);


  const getPokemonStats = (data) => {
    const stats = [];
    data.stats.map(stat => {
      stats.push(stat.base_stat);
      return stats;
    })
    return stats;
  }

  const getPokemonTypes = (data) => {
    const types = [];
    data.types.map(type => {
      types.push(type.type.name);
      return types;
    })
    return types;
  }

  const openPokemonData = () => {
    setShowData(true);
  }

  useEffect(() => {
    // componentDidMount
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const number = location.state.number;
    //Consumir la API de pokeapi
    const getPokemonDetails = async () => {
      const response = await fetch(`${url}${number}`);
      const data = await response.json();
      const stats = await getPokemonStats(data);
      await setPokemonStats(stats);
      const types = await getPokemonTypes(data);    
      await setPokemonTypes(types);
      openPokemonData();
    }
    getPokemonDetails();
    // eslint-disable-next-line
  }, []);

  const getBack = () => {
    history.goBack();
  };
  
  return (
    <div className="pokemon-detail-container">
      {
        showData ? 
        //* Se muestra una vez que están cargados los detalles del Pokemon
          <div className="pokemon-detail-container" style={{background: `linear-gradient(to right, ${location.state.colors[0]}, ${location.state.colors[1]}`}}>
            <div className="pokemon-detail">
              <div className="pokemon-detail-id">
                <h2>{location.state.number}</h2>
                <h2>{location.state.name[0].toUpperCase() + location.state.name.slice(1)}</h2>
              </div>
              <div className="pokemon-detail-img">
                <img src={location.state.img} alt={location.state.name}/>
              </div>
            </div>
              <PokemonData pokemonTypes={pokemonTypes} pokemonStats={pokemonStats} colors={location.state.colors} getBackFn={getBack}/>
          </div>
        :
        //* Se muestra mientras los detalles del pokemon son cargados
          <div className="pokeball"></div>
      }
    </div>
  );
}
