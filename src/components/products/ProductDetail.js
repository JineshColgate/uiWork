import React, { Component, Fragment, useState } from "react";
import { Modal, Button, Container } from "react-bootstrap";
import {GetProductDetail, AddToCart, GetCartDetail} from "../../services/api";


class ProductDetail extends Component{

	constructor(props) {
		super(props);
		this.getProductDetail = this.getProductDetail.bind(this);
		this.getCart = this.getCart.bind(this);
		this.addToCart = this.addToCart.bind(this);
		this.state = {
			product: {},
			variant_attribute_info: {},
			product_variants: [],
			product_cart: "",
			showHide : false
		}
	}

	componentDidMount() {
		let product_id = this.props.match.params.id;
    	this.getProductDetail(product_id);
    	this.getCart();
  	}

	getProductDetail(product_id){
		GetProductDetail(product_id).then((data)=> {
      	  this.handleReponse(data.data);
    	})
	}

	getCart(){
		GetCartDetail().then((response) => {
			this.setState({product_cart: response.data.count})
		});
	}

	handleReponse(response){
		this.setState({product: response, variant_attribute_info: response.variant_attribute_info, product_variants: response.product_variants});
	}

	handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

	addToCart(variant_id){
		var cart_data = {
			product_variant: variant_id,
			quantity: 1
		}
		AddToCart(cart_data).then((data)=> {
      	  this.getCart();
      	  this.handleModalShowHide();
    	})	
	}


	render(){
		return(
			<Fragment>
				<Container className="mt-5">
					<div className="row">
					  <div className="col-md-12 bread-crumb"> <a href={"/"}>Home</a> > <a href={"/products-list"}>Products</a> > <a href={"/products"}>{this.state.product.name}</a>  </div>
					</div>

					<div className="row">
						<div className="col-md-12">
							<div className="product-enquiry-count float-right detail-count">
								<a href={"/profile/cart"} className="product-enquiry-count">Products for Enquiry ({(this.state.product_cart) ? this.state.product_cart : "0"})</a>
							</div>
						</div>
					</div>
				</Container>
				<Container className="product-section mt-1">
					<div className="row product-dt-name-row">
						<div className="col-md-12 product-dt-name">
							{this.state.product.name}
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<img src={(this.state.product.images && this.state.product.images[0]) ? this.state.product.images[0].file_url : require("../../img/no-image.png") } class="product-dt-img" />
						</div>
						<div className="col-md-8">
							<div className="row">
								<div className="col-md-12">
									{this.state.product.description}
								</div>
							</div>
							<div className="row">

							</div>
						</div>
					</div>
				</Container>
				<Container className="mt-3">
					<div className="row product-detail-head">
						Product Details
					</div>

					<div className="row">
						<table className="variant-tb">
						  <tr>
						    {
						    	Object.keys(this.state.variant_attribute_info).map(key => (
						    		<th>{key}</th>
						    		))
						    }
						    <th>Action</th>
						  </tr>
						 	{
						 		this.state.product_variants.map((value, key) => (
						 			<tr>
						 				{
						 					Object.keys(this.state.variant_attribute_info).map(key => (
						    					value.product_variant_attributes.map((pvb, i) => (
						    							(pvb.attribute_value.attribute.name == key) ? <td>{pvb.attribute_value.name}</td> : ""
						    						))
						    				))
						 				}
						 				<td><button className="add-enquiry" onClick={ () => this.addToCart(value.id)}>+ ADD</button></td>
						 			</tr>

						 			))
						 	}
						</table>
					</div>	
				</Container>
				<Modal show={this.state.showHide}>
		            <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
		            <Modal.Title>Add to Cart</Modal.Title>
		            </Modal.Header>
		            <Modal.Body>Successfully added to Cart</Modal.Body>
		            <Modal.Footer>
		            <Button variant="secondary" onClick={() => this.handleModalShowHide()}>
		                Close
		            </Button>
		            </Modal.Footer>
		        </Modal>	
			</Fragment>			

			)
	}
}

export default ProductDetail