import React, { Component, Fragment } from "react";
import queryString from 'query-string';
import { GetFilters } from "../../services/api";

class ProductFilter extends Component{

	constructor(props) {
		super(props);
		this.getFilters = this.getFilters.bind(this);
		this.handleChange = this.handleChange.bind(this);
		const product_varaint_id = (this.props.props.query_string && this.props.props.query_string.product_variants__product_variant_attributes__attribute_value_id) ? this.props.props.query_string.product_variants__product_variant_attributes__attribute_value_id : []
		this.state = {
			prodAttributes: [],
			productAttributesIds: {},
			query_str: this.props.props.query_string,
			product_varaint_ids: product_varaint_id
		}
	}

	componentDidMount() {
    	this.getFilters();
  	}

	getFilters(){
		GetFilters().then((data)=> {
      	  this.handleReponse(data.data.results);
    	})
	}

	handleChange(e){
		let current_query_string = this.state.query_str;
		if(current_query_string["page"]){
			delete current_query_string["page"];
		}
		if(current_query_string["page_size"]){
			delete current_query_string["page_size"];
		}
		if(!current_query_string.product_variants__product_variant_attributes__attribute_value_id){
		  current_query_string.product_variants__product_variant_attributes__attribute_value_id = []	
		}else if(!Array.isArray(current_query_string.product_variants__product_variant_attributes__attribute_value_id)){
		  var value_id = current_query_string.product_variants__product_variant_attributes__attribute_value_id;
		  current_query_string.product_variants__product_variant_attributes__attribute_value_id = [value_id];
		} 

		if(e.target.checked){
			current_query_string.product_variants__product_variant_attributes__attribute_value_id.push(e.target.value);
		}else{
			var index_att = current_query_string.product_variants__product_variant_attributes__attribute_value_id.indexOf(e.target.value);
			current_query_string.product_variants__product_variant_attributes__attribute_value_id.splice(index_att, 1);
		}
		
		
		var new_query_str = queryString.stringify(current_query_string);
		console.log(new_query_str);
		this.props.history.push("/products-list?" + new_query_str)
	}

	handleReponse(response){
		var attr_ids = {};
		response.map((attr_value, attr) => {
			attr_ids["attr" + attr_value.id] = false;
		});
		this.setState({prodAttributes: response, productAttributesIds: attr_ids});
	}

	setShowMore(e, id){
		var attr_ids = this.state.productAttributesIds;
		attr_ids["attr"+ id] = !attr_ids["attr"+ id];
		this.setState({productAttributesIds: attr_ids})
	}

	render(){
		return(
			<Fragment>
			  <form>
			  	{
			  		this.state.prodAttributes.map((value, key) => (
			  			<div className="row filter-att-main">
				    		<div className="col-md-12 filter-head">
				    			{value.name}
				    		</div>
				    	{	
				    		value.attribute_values.map((at_value, attr) => (

				    			<div className={(attr < 5 || this.state.productAttributesIds["attr"+ value.id]) ? "col-12": "col-12 d-none"}>
									<div >
				    					 <input type="checkbox" defaultChecked={this.state.product_varaint_ids.includes(String(at_value.id))}  onChange={this.handleChange} value={at_value.id} class="form-check-input" id={String(at_value.id) + "-product-att"} />
				   						 <label className="form-check-label filter-check-nm" for={String(at_value.id) + "-product-att"} >{at_value.name}</label>
				  					</div>
								</div>	
				    		))
				    	}
				    	<div className="col-12">
				    		<a href='javascript:void(0)' onClick={(event) => this.setShowMore(event, value.id)}>{ (this.state.productAttributesIds["attr"+ value.id]) ? "show less" : "show more" }</a>
				    	</div>
				    	</div>

			  		))
			  	}
			  </form>	
			</Fragment>
			);
	}
}

export default ProductFilter;