import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component,isLoggedIn, props, ...rest }) => (
    <Route {...rest} render={(matchProps) => (
      isLoggedIn === true
        ? <Component {...matchProps} {...props}/>
        : <Redirect to={{
            pathname: '/login',
            state: { from: matchProps.location }
          }} />
    )} />
)

export default PrivateRoute