import React from "react";
import { BrowserRouter as Router, Switch, HashRouter } from "react-router-dom";
import RouteWithProps from './components/router/RouteWithProps'
import PrivateRoute from './components/router/PrivateRoute'
// import * as authentication from './services/authentication'
import MainApp from './routes';
// import { IntlProvider } from 'react-intl';
// import AppLocale from './lang';
// import ErrorBoundary from "./ErrorBoundary";
// // import AuthContext from './context/auth/authContext';
// import {getUrlParamas} from "helpers"
// import logo from './logo.svg';
import './App.css';
import './css/bootstrap.css';
import './css/fontawesome.css';


function App() {

  return (
        <Router>
          <Switch>
          	<RouteWithProps path="/" component={MainApp} />
          </Switch>
        </Router>
    );
}

export default App;
