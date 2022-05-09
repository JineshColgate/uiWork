import React, { Component, useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import RouteWithProps from "../components/router/RouteWithProps";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Home from "../components/home";
import ContactUs from "../components/contactus";
import AboutUs from "../components/aboutus";
import ProductList from "../components/products/ProductList";
import ProductDetail from "../components/products/ProductDetail";
import Login from "../components/login";
import SignUpForm from "../components/login/SignUpForm";
import CartCheckout from "../components/products/CartCheckout";
import Profile from "../components/profile";


class MainApp extends Component {
  
  render() {

    return (
      <div classNameName="App">

          <Header
            changeLanguage={this.props.changeLanguage}
          />
            <Switch>
              <RouteWithProps path="/" exact component={Home} />
              <RouteWithProps path="/login" component={Login}/>
              <RouteWithProps path="/sign-up" component={SignUpForm}/>
              <RouteWithProps path="/contact-us" exact component={ContactUs} />
              <RouteWithProps path="/about-us" component={AboutUs} />
              <RouteWithProps path="/products-list" component={ProductList} />
              <RouteWithProps path="/product/:id" component={ProductDetail} />
              <RouteWithProps path="/checkout" component={CartCheckout} />
              <RouteWithProps path="/profile/:active_component" component={Profile} />
            </Switch>
          <Footer
            changeLanguage={this.props.changeLanguage}
          />
      </div>
    );
  }
}
export default MainApp;
