import React, { Component, Fragment, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {GetCartDetail} from "../../services/api";


const ProductVaraintValues = ({productVariants, productIndex}) => {
	var productVal = productVariants[Object.keys(productVariants)[productIndex]];
	if(productVal){
		return (
			productVal.map((v, k) => (
				<div className="row"><div className="col-md-12">{v}</div></div>
				))
		)
	}else{
		return "";
	}
};

class CartCheckout extends Component{

	constructor(props) {
		super(props);
		this.getCart = this.getCart.bind(this);
		this.state = {
			product_cart: "",
			cart_count: ""
		}
	}

	componentDidMount() {
    	this.getCart();
  	}

  	getCart(){
		GetCartDetail().then((response) => {
			console.log(response)
			this.setState({product_cart: response.data.results, cart_count: response.data.count})
		});
	}



	render(){
		return(
			<h1>test</h1>
			)
	}
}

export default CartCheckout