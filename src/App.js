import React from 'react';
import LoginPage from './components/LoginPages/LoginPage';
import SignUpPage from './components/LoginPages/SignUpPage';
import HomePage from './components//HomePage/HomePage';
import ListView from './components/ListView/ListView';
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
