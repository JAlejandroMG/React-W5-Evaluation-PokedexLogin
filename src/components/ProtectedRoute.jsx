import React from "react";
import { Route } from "react-router-dom";
// import firebase from '../firebase/config';
//* Components
import SignIn from './SignIn';

// firebase.auth().currentUser


export default function ProtectedRoute(props) {
  return (
    <Route path={props.path}>
      {props.user ? 
      (props.children) :
      (
        <SignIn setUserFn={props.setUserFn} />
      )}
    </Route>
  );
}
