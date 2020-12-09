import React, {useState} from "react";
import {auth} from '../firebase/config';
import { Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


export default function SignUp () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailFieldChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordFieldChange = (event) => {
    setPassword(event.target.value);
  };

  const register = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then(
        response => {
            console.log(response);
        }
    ).catch( error => console.log(error));
  }

   return (
<div>
  <form onSubmit={register} >
    <Grid container style={{height: '92vh'}}>
        {/*PRIMER CONTENEDOR con Formulario*/}
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
                <div style={{ height: 20 }} />
                <Grid item xs={12}>
                <TextField
                    onChange={(e) => handleEmailFieldChange(e)}
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                />
                </Grid>
                {/*Password*/}
                <div style={{ height: 20 }} />
                <Grid item xs={12}>
                <TextField
                  onChange={(e) => handlePasswordFieldChange(e)}
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                </Grid>
                <div style={{ height: 20 }} />
                {/*Button Sign In*/}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    aligncontent="center" 
                    direction="column"
                    justify="space-between"
                    style={{ padding:10, top:10}}
                >
                Register
                </Button>
            </div>
            <div />
        </Grid>
        {/*SEGUNDO CONTENEDOR con Imagen*/}
        <Grid item xs={12} sm={6}>
            <img src="https://cdn.hipwallpaper.com/i/61/67/gtWsNX.jpg" 
            style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="poke-logo"/>
        </Grid>
    </Grid>
  </form>
</div>
  )
};