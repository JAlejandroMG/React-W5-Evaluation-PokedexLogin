import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
//* Components
import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Pokedex from './Pokedex';
import PokemonDetail from './components/card/pokemonDetail/pokemonDetail';
//* PrivateRoute
import ProtectedRoute from './components/ProtectedRoute';


export default function App() {
  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Router>
        <Header user={user} setUserFn={setUser} />
        
        <Switch>
          <Route path="/" exact>
            <SignIn setUserFn={setUser} />
          </Route>
          <Route path="/registro">
            <SignUp />
          </Route>
          <ProtectedRoute path="/pokedex" user={user} setUserFn={setUser} exact>
            <Pokedex />
          </ProtectedRoute>
          <Route path="/pokedex/:id">
            <PokemonDetail />
          </Route>
          <Route path="*" exact>
            <h2>404 Not Found</h2>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}
