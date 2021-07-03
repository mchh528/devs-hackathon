import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export const Sign = () => {
    const [user, setUser] = useState({
        username: '',
        password: '',
        EXP: 10,
        level: 0
      });

    
      const createUser = () => {
          axios.post('http://localhost:5000/users', user);
          localStorage.setItem('username', user.username);
          window.location.href = "http://localhost:3000/";

      }
      // localStorage.clear();
      const storedData = localStorage.getItem("username");

      const playGame = () => {
        let id = localStorage.getItem('username');
        axios.post(`http://localhost:5000/users/Game/${id}`, user);
      }

    if(!storedData) {
        return (
            <form class="buttonPosition" noValidate autoComplete="off">
      <TextField id="standard-basic" label="username" value={user.username} onChange={(event) => {
          setUser({ ...user, username: event.target.value})
      }}/>
      <TextField id="standard-basic" label="password" value={user.password} onChange={(event) => {
          setUser({ ...user, password: event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick={createUser}>
        Create Account/Sign-in
      </Button>
    </form>
        )
    }
    else {
        return (
            <Router>
            <Link to="/game"><button onClick='playGame()'>Play</button></Link>
            </Router>
        )
    }
}   
