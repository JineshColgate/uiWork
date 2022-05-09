import React, { Component, Fragment } from "react";
import {GetEnquiries} from "../../services/api";
import { Modal, Button } from "react-bootstrap";
import { Trash } from 'react-bootstrap-icons';
import Time from 'react-time-format';


class MyEnquiries extends Component{
  
  constructor(props) {
		super(props);
    this.getEnquiries = this.getEnquiries.bind(this);
		this.state = {
			enquiries: []
		}
	}

  componentDidMount() {
      this.getEnquiries();
  }

  getEnquiries(){
    GetEnquiries().then((response) => {
      console.log(response);
      this.setState({enquiries: response.data.results})
    });
  }

  getDatetime(date_str){
    let created_date = new Date(date_str);
    return created_date;
  }

  render(){
  	return(
  		<Fragment>
       <div className="container">
          <div className="row cart-head-row">
            <div className="col-6 personal-info-head"> 
            My Enquiries
            </div>
          </div>
          {

            this.state.enquiries.map((value, i) => (
              <div>{value.enquiry_items.map((product_c, j) => ( 
              <div className="row product-cart-row">
                <div className="col-8">
                  <a href={"/product/" + product_c.product_variant.product.id} className="product-cart-name" >{product_c.product_variant.product.name}</a>
                  
                </div>
                <div className="col-4">
                  <Time value={this.getDatetime(value.created)} format="YYYY-MM-DD hh:mm:ss" />
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





                ))}</div>
              ))
          }
          
        </div>   
      </Fragment>
  		)
  }
}

export default MyEnquiries;