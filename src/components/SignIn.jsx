import React, {useState, useEffect} from "react";
import firebase, {auth} from '../firebase/config';
import {useHistory} from 'react-router-dom'; 
//* Material imports
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function SignIn (props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const googleProvider = new firebase.auth.GoogleAuthProvider();

  const handleEmailFieldChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordFieldChange = (event) => {
    setPassword(event.target.value);
  };

  const login = async (event) => {
    try {
      event.preventDefault();
      const result = await auth.signInWithEmailAndPassword(email, password)
      //Para actualizar el estado y redireccionar al usuario a otra pagina
      await props.setUserFn(result.user);
      history.push("/pokedex");
    } catch (error) {
      //En caso de que las credenciales de acceso sean incorrectas
      console.log("Error en la autenticacion", error);
    }
  };

  const showGooglePopup = async () => {
    try {
      let result = await firebase.auth().signInWithPopup(googleProvider);
      //Para actualizar el estado y redireccionar al usuario a otra pagina
      await props.setUserFn(result.user);
      history.push("/pokedex");
    } catch (error) {
      //En caso de que las credenciales de acceso sean incorrectas
      console.log("Error en la autenticacion", error);
    }
  };

  useEffect(() => {
    // componentDidMount
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        props.setUserFn(user);
        history.push("/pokedex");
      }
    });
    // eslint-disable-next-line
  }, []);


  return (
    <div className="signin">
      <form onSubmit={login} >
        <Grid container style={{height: '92vh'}}>
            {/*PRIMER CONTENEDOR con Imagen*/}
            <Grid item xs={12} sm={6}>
                <img src="https://i.pinimg.com/originals/7c/19/62/7c1962b7a65ec76085f96e1ccf8bfc7e.jpg" 
                style={{width: '100%', height: '92vh', objectFit: 'cover'}} alt="poke-logo"/>
            </Grid>
            {/*SEGUNDO CONTENEDOR con Formulario*/}
            <Grid 
                container 
                item 
                xs={12} 
                sm={6}
                alignItems="center"
                justify="center"
                style={{ padding:10 }}>
                <div />
                <div style={{
                    display:"flex", 
                    flexDirection:"column",
                    maxWidth:300,
                    minWidth:400,
                    }}>
                    {/*Pokemon Logo*/}
                    <Grid container justify="center" >
                        <img src="https://www.freepnglogos.com/uploads/pok-mon-go-logo-png-30.png" alt="Pokemon Logo" width='200'/>
                    </Grid>
                    {/*Email*/}
                    <TextField
                        onChange={(e) => handleEmailFieldChange(e)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    {/*Password*/}
                    <TextField
                        onChange={(e) => handlePasswordFieldChange(e)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <div style={{ height: 20 }} />
                    {/*Button Sign In*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="link"
                        aligncontent="center" 
                        direction="column"
                        justify="space-between"
                        style={{ padding:10, top:10}}
                    >
                    Sign In
                    </Button>
                    <div style={{ height: 20 }} />
                    {/*Button Sign In Google*/}
                    <Button
                        onClick={showGooglePopup}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        aligncontent="center" 
                        direction="column"
                        justify="space-between"
                        style={{ padding:10, top:10}}
                    >
                    Sign In Google
                    </Button>
                    <div style={{ height: 20 }} />
                </div>
                <div />
            </Grid>
        </Grid>
      </form>
    </div>
  )
};
