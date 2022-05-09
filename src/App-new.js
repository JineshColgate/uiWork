import React, { Component, useContext, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, HashRouter } from "react-router-dom";
import Login from "./components/Login";
import RouteWithProps from './components/router/RouteWithProps'
import PrivateRoute from './components/router/PrivateRoute'
import * as authentication from './services/authentication'
import MainApp from './routes';
import Forgot from './components/Forgot'
import Reset from './components/Reset'
import PrintLabel from './components/Print/Label'
import "./App.scss";
import { IntlProvider } from 'react-intl';
import AppLocale from './lang';
import { SIGNIN_TOKEN } from './constant/defaultValues'
import ErrorBoundary from "./ErrorBoundary";
import AuthContext from './context/auth/authContext';
import {getUrlParamas} from "helpers"

const authState = authentication.getAuthState()
const App = () => {

  const authContext = useContext(AuthContext);
  const { setUser, logoutUser } = authContext;

  const [auth, setAuth] = useState({
    loggedIn: authState.userToken !== null && authState.permissions !== null,
    username: authState.username,
    userToken: authState.userToken,
    role: authState.role,
    userRole: authState.userRole
  });

  const [language, setLanguage] = useState(localStorage.getItem('language') || "en")

  const _logout = () => {
    const user = {
      ...auth,
      loggedIn: false,
      username: null,
      userToken: null,
      role: null,
      userRole: null,
      permission: null
    }
    setAuth(user)
    logoutUser(user)
  }

  const handleLoginSuccess = (result) => {
    if (!result.permissions) {
      return Promise.reject(result)
    }
    const user = {
      ...auth,
      loggedIn: true,
      username: result.username,
      userToken: result.userToken,
      role: result.role,
      userRole: result.userRole,
      permission: {
        dashboard: {
          filters: [],
        },
      },
      permissions: result.permissions
    }

    setUser(user);
    setAuth(user);
    localStorage.setItem('userAuth', JSON.stringify(user));
  }

  const handleLoginError = (err) => {
      _logout()
      return Promise.reject(err)
  }
  const login = (username, password) => {
    return authentication.login(username, password)
      .then(handleLoginSuccess)
      .catch(handleLoginError)
  }

  const magicLogin = (token, clientId) => {
    authentication.magicLogin(token, clientId)
    .then(handleLoginSuccess)
    .catch(handleLoginError)
  }
  const logout = (isMagicLogout = false) => {
    return authentication.logout(isMagicLogout).then(result => {
      _logout()
    })
  }


  const changeLanguage = () => {
    if (localStorage.getItem('language') && localStorage.getItem('language') !== language) {
      setLanguage(localStorage.getItem('language'))
    }
  }


  const currentAppLocale = AppLocale[language]; //en //id for indonesia
  useEffect(() => {
    if (!localStorage.getItem('language')) {
      localStorage.setItem('language', 'en');
    }
  }, [])

  const isMagicLogin = () => {
    const field = SIGNIN_TOKEN;
    const url = window.location.href;
    if(url.indexOf('?' + field + '=') != -1)
        return true;
    else if(url.indexOf('&' + field + '=') != -1)
        return true;
    return false
  }

  if(isMagicLogin()){
    const result = getUrlParamas();
    localStorage.setItem(SIGNIN_TOKEN, JSON.stringify(result));
    logout(true);
    
  }
  return (
    <ErrorBoundary>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}
      >
        <HashRouter>
          <Switch>
            <RouteWithProps path='/login' component={Login} props={{ login, magicLogin, isLoggedIn: auth.loggedIn }} />
            <RouteWithProps path='/forgot' component={Forgot} props={{ login: login, isLoggedIn: auth.loggedIn }} />
            <RouteWithProps path='/reset/:id' component={Reset} props={{ login: login, isLoggedIn: auth.loggedIn }} />
            <RouteWithProps path='/print' component={PrintLabel} props={{ login: login, isLoggedIn: auth.loggedIn }} />
            <PrivateRoute path='/' component={MainApp} isLoggedIn={auth.loggedIn} props={{ logout: logout, changeLanguage: changeLanguage, userRole: auth.userRole }} />
          </Switch>
        </HashRouter>
      </IntlProvider>
    </ErrorBoundary>
  );
}


export default App;
