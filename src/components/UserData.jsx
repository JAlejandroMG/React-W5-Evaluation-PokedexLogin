import React from 'react';
import firebase from '../firebase/config';
import {useHistory} from 'react-router-dom';

export default function UserData(props) {
  const history = useHistory();

  const logout = async () => {
    try {
      const result = await firebase.auth().signOut();
        await props.setUserFn(false);
        console.log('Signout exitoso', result);
        history.push("/pokedex");
    } catch(error) {
        console.log('Signout rechazado');
    }
  };


  return (
    <div className="user-data" >
      <div className="otra-mas" >
        <h5>{props.user.displayName}</h5>
        <button onClick={logout} >Cerrar sesión</button>
      </div>
      <div className="user-image" >
        <img src={props.user.photoURL} alt="User"/>
      </div>
    </div>
  )
}