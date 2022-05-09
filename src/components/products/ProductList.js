import React, { Component, Fragment } from "react";
import ProductFilter from "./ProductFilter";
import {GetProductList, GetCartDetail} from "../../services/api";
import queryString from 'query-string';
import { ChevronDoubleRight, ChevronDoubleLeft } from 'react-bootstrap-icons';


const ProductVaraintValues = ({productVariants, productIndex}) => {
	var productVal = productVariants[Object.keys(productVariants)[productIndex]].slice(0, 2);
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

class ProductList extends Component{
	constructor(props) {
		super(props);
		this.getProducts = this.getProducts.bind(this);
		this.getCart = this.getCart.bind(this);
		const query_str = queryString.parse(this.props.location.search);
		this.state = {
			products: [],
			query_string: query_str,
			product_cart: "",
			next: "",
			previous: ""
		}
	}

	componentDidMount() {
    	this.getProducts();
    	this.getCart();
  	}

  	componentDidUpdate(prevProps, prevState){
  		if(this.props.location.search != prevProps.location.search){
  			var new_query_str = queryString.parse(this.props.location.search);
  			this.getProducts();
  		}
  	}

	getProducts(){
		var new_query_str = (this.state.query_string) ? queryString.stringify(this.state.query_string) : "";
		GetProductList(new_query_str).then((data)=> {
      	  this.handleReponse(data);
    	})
	}

	getCart(){
		GetCartDetail().then((response) => {
			this.setState({product_cart: response.data.count})
		});
	}

	handleReponse(response){
		this.setState({products: response.data.results, next: this.setNextPrevious(response.data.next), previous: this.setNextPrevious(response.data.previous)});
	}

	setNextPrevious(url){
		if(url === null){
			return null;
		}
		var url_obj = new URL(url);
		var url_params_str = (url_obj.search) ? url_obj.search : "";
		var url_str = window.location.origin + "/products-list" + url_obj.search;
		console.log(url_str);
		return url_str;
	}

	render(){
		return(
			<Fragment>
				<div className="container mt-5">
					<div className="row list-head">
						<div className="col-md-3">
							Filter
						</div>
						<div className="col-md-6">

						</div>
						<div className="col-md-3">
							<a href={"/profile/cart"} className="product-enquiry-count">Products for Enquiry ({(this.state.product_cart) ? this.state.product_cart : "0"})</a>
						</div>
					</div>
					<div className="row">
						<div className="col-md-2 filters-main">
							<ProductFilter props={{ query_string: this.state.query_string}} history={this.props.history} />
						</div>
						<div className="col-md-9 list-product-margin">
							{
								this.state.products.map((product, i) => (

								<div className="row product-div-main" key={i}>
									<div className="col-md-12">
									<div className="row product-name-row">
										<div className="col-md-6">
											<a href={"/product/" + product.id} className="product-name" >{product.name}</a>
										</div>
										<div className="col-md-6 text-right">
											<a href={"/product/" + product.id} className="enquiry-btn" >+ Add to Enquiry</a>
										</div>
									</div>
									<div className="row">
										<div className="col-md-3">
											<img src={product.images[0] ? product.images[0].file_url : require("../../img/no-image.png") } class="product-img" />
										</div>
										<div className="col-md-9">
											<div className="row att-head">
												<div className="col-md-4">{Object.keys(product.variant_attribute_info)[0]}</div>
												<div className="col-md-4">{Object.keys(product.variant_attribute_info)[1]}</div>
												<div className="col-md-4">USES</div>
											</div>
											<div className="row text-specs">
												<div className="col-md-4">
													<ProductVaraintValues productVariants={product.variant_attribute_info} productIndex={0}  />
												</div>
												<div className="col-md-4">
													<ProductVaraintValues productVariants={product.variant_attribute_info} productIndex={1}  />
												</div>
												<div className="col-md-4">
													<div className="row">
														{
															product.uses.map((use, i) => (
																use.name + (i == (product.uses.length - 1) ? "" : ",")
															))
														}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							))}

							<div className="row d-flex justify-content-center mt-2">
							  <nav aria-label="Page navigation example">
								  <ul className="pagination">
								    {
									(this.state.previous) ? 
										<li className="page-item"><a className="page-link" href={this.state.previous}>Previous</a></li>
									: ""	
									}

									{
									(this.state.next) ? 
										<li className="page-item"><a className="page-link" href={this.state.next}>Next</a></li>
									 : ""
								    }
								    
								    
								  </ul>
							  </nav>
								
								
							</div>	
						</div>
					</div>

				</div>
			</Fragment>
			);
	}
}

export default ProductList;