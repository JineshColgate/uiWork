import React, { Component } from "react";


class ClientCount extends Component{
	render(){
		return(
	            <div className="row client-count-div">
	              <div className="col-md-3 col-lg-3 col-sm-12 text-center">
	                <span className="number-details">3000+</span><br/>
	                <span className="happy-client">Happy Clients</span>
	                </div>
	              <div className="col-md-2 col-lg-2 col-sm-12 text-center">
	                <span className="number-details">800+</span><br/>
	                <span className="happy-client">Employees</span>
	              </div>
	              <div className="col-md-2 col-lg-2 col-sm-12 text-center">
	                <span className="number-details">40</span><br/>
	                <span className="happy-client">Countries</span>
	              </div>
	              <div className="col-md-2 col-lg-2 col-sm-12 text-center">
	                <span className="number-details">30</span><br/>
	                <span className="happy-client">Years Experience</span>
	              </div>
	              <div className="col-md-3 col-lg-3 col-sm-12 text-center">
	                <span className="number-details">3</span><br/>
	                <span className="happy-client">Manufacturing Plants</span>
	              </div>
	            </div>
			);
	}
}

export default ClientCount;