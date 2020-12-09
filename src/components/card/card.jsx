import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './card.css';


/* const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    background            : `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]}`
  }
}; */


export default function Card(props) { 
  const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '50vw',
      height                : '70vh',
      background            : `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]}`,
      padding               : '20px',
      overflow              : 'hidden',
    }
  };
  

  return (
    <div className='card-container' style={{background: `linear-gradient(to right, ${props.colors[0]}, ${props.colors[1]}`}}>
      <div className="pokemon-id">
        <h3>{props.number}</h3>
        <h2>{props.name[0].toUpperCase() + props.name.slice(1)}</h2>
      </div>
      <img src={props.img} alt={props.name}/>
      <Link to={{
                pathname: `/pokedex/${props.number}`,
                state: {
                  isLogged: true,
                  number: props.number,
                  name: props.name,
                  img: props.img,
                  colors: props.colors
                }
              }}>
        <button  className="bounce">
          <span className="D">D</span> 
          <span className="e">e</span> 
          <span className="t">t</span> 
          <span className="a">a</span> 
          <span className="i">i</span> 
          <span className="l">l</span> 
          <span className="s">s</span>
        </button>
      </Link>
    </div>
  )
}
