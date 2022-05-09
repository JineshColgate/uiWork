import React, { Component, Fragment } from "react";
import {GetCartDetail , PlaceEnquiry, RemoveFromCart} from "../../services/api";
import { Modal, Button } from "react-bootstrap";
import { Trash } from 'react-bootstrap-icons';


class Cart extends Component{
  
  constructor(props) {
		super(props);
    this.getCart = this.getCart.bind(this);
    this.placeEnquiry = this.placeEnquiry.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
		this.state = {
			product_cart: [],
      showHide : false
		}
	}

  componentDidMount() {
      this.getCart();
  }

  getCart(){
    GetCartDetail().then((response) => {
      this.setState({product_cart: response.data.results})
    });
  }

  placeEnquiry(){
    PlaceEnquiry().then((response) => {
      this.getCart();
      this.handleModalShowHide();
    })
  }

  handleModalShowHide() {
        this.setState({ showHide: !this.state.showHide })
    }

  removeFromCart(id, pv_id){
    RemoveFromCart(id, pv_id).then((response) => {
      this.getCart();
    })
  }  

  render(){
  	return(
  		<Fragment>
       <div className="container">
    		  <div className="row cart-head-row">
            <div className="col-6 personal-info-head"> 
    		  	Product Cart
            </div>
            <div className="col-6">
             {
              this.state.product_cart.length > 0 ?
              <button className="place-enquiry float-right" onClick={ () => this.placeEnquiry()}>Place Enquiry</button>
              : ""
             }
            </div>
    		  </div>
          {
            this.state.product_cart.length > 0 ?

            this.state.product_cart.map((product_c, i) => (
              <div className="row product-cart-row">
                <div className="col-12">
                  <a href={"/product/" + product_c.product_variant.product.id} className="product-cart-name" >{product_c.product_variant.product.name}</a>
                  <Trash className="ml-4" onClick={ () => this.removeFromCart(product_c.pk, product_c.product_variant.pk)} />
                </div>
                <div className="col-12">
                  <div className="row">
                    <div className="col-3">
                      <img src={product_c.product_variant.product.images[0] ? product_c.product_variant.product.images[0].file_url : require("../../img/no-image.png") } className="product-img" />
                    </div>
                    <div className="col-9">
                      <div className="row">
                        {
                          product_c.product_variant.product_variant_attributes.map((pv, j) => (
                              <div className="col-3">
                                <div className="row">
                                  <div className="col-12 product-att-name">{pv.attribute_value.attribute.name}</div>
                                  <div className="col-12 product-att-value">{pv.attribute_value.name}</div>
                                </div>
                              </div>
                            ))
                        }
                      </div>
                    </div>
                  </div>
                </div>  
              </div>

              )) : 
            <div className="row product-cart-row">
                <div className="col-12 text-center no-product-cart">
                  No Products in Cart
                </div>
              </div>
          }
          
        </div>
        <Modal show={this.state.showHide}>
                <Modal.Header closeButton onClick={() => this.handleModalShowHide()}>
                <Modal.Title>Enquiry</Modal.Title>
                </Modal.Header>
                <Modal.Body>Enquiry Placed Successfully</Modal.Body>
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

export default Cart;