import React from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

function App() {
  
  function handleLogin(e) {
    const form = e.target
    e.preventDefault();
    const loginInfo = {
      username: form[0].value,
      password: form[1].value
    }
    
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginInfo)
    })

    form.reset();
  }

  function handleNewUser(e) {
    const form = e.target
    e.preventDefault();
    const newUserInfo = {
      username: form[0].value,
      password: form[1].value
    }
    console.log(newUserInfo)
    form.reset();
  }

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage handleLogin={handleLogin}/>
        </Route>
        <Route path="/sign-up">
          <SignUpPage handleNewUser={handleNewUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
