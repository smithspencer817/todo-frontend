import React from 'react';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import HomePage from './components/HomePage';
import ListView from './components/ListView';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  Switch,
  Route,
  withRouter
} from "react-router-dom";

function App() {

  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/sign-up">
          <SignUpPage />
        </Route>
        <Route path='/home'>
          <HomePage />
        </Route>
        <Route path='/list-view'>
          <ListView />
        </Route>
      </Switch>
    </div>
  );
}

export default withRouter(App);
