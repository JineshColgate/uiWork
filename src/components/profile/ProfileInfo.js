import React, { Component, Fragment } from "react";
import {UserDetail, SaveUser} from "../../services/api";


class ProfileInfo extends Component{
  
  constructor(props) {
		super(props);
		this.getUserDetail = this.getUserDetail.bind(this);
		this.saveUser = this.saveUser.bind(this);
		this.state = {
			first_name: "",
			last_name: "",
			email: "",
			mobile_number: "",
			gender: ""
		}
	}

  componentDidMount() {
    	this.getUserDetail();
  	}	

  getUserDetail() {
  	UserDetail().then((data)=> {
  		  var details = {
  		  	first_name: data.data.first_name,
			last_name: data.data.last_name,
			email: data.data.email,
			mobile_number: data.data.mobile_number,
			gender: data.data.gender
  		  }	 
  		  this.setState(details);
    	})
  }

  saveUser(){
        var userDetails = {
        	user: {
        	  first_name: this.state.first_name,
              last_name: this.state.last_name,	
        	},
            gender: this.state.gender,
            mobile_number: this.state.mobile_number
           }

          SaveUser(userDetails).then((data)=> {
          	alert("updated");
          })
    }



  render(){
  	return(
  		<Fragment>
  		  <div className="container">
	  		  <div className="row">
	  		  	<div className="col-8">
		  		  	
	  		  		<div className="form-group">
	  		  			<label for="first_name" className="personal-info-head">Personal Information</label>
	  		  			<div className="form-row">
	  		  				<div className="col"><input type="text" className="form-control" id="first_name" value={this.state.first_name} placeholder="First Name" /></div>
	  		  				<div className="col"><input type="text" className="form-control" id="last_name" placeholder="Last Name" /></div>
	  		  			</div>	
	  		  		</div>
	  		  	</div>
	  		  </div>
	  		  <div className="row">
	  		  	<div className="col-4">
	  		  		<div className="form-group">
	  		  			<label for="first_name" className="personal-info-head">Gender</label>
	  		  			<div className="form-row">
	  		  				<div className="col-4">
	  		  					<div className="form-check">
						          <input className="form-check-input" type="radio" name="gender" id="gridRadios1" value="male" checked={ (this.state.gender == "male" || this.state.gender === null) } />
						          <label className="form-check-label" for="gridRadios1">
						            Male
						          </label>
						        </div>
	  		  				</div>
	  		  				<div className="col-4">
	  		  					<div className="form-check">
						          <input className="form-check-input" type="radio" name="gender" id="gridRadios1" value="female" checked={ (this.state.gender == "female") } />
						          <label className="form-check-label" for="gridRadios1">
						            Female
						          </label>
						        </div>
	  		  				</div>
	  		  			</div>
						
					</div>
	  		  	</div>
	  		  </div>
	  		  <div className="row">
	  		  	<div className="col-4">
	  		  		<div className="form-group">
		  		  			<label for="first_name" className="personal-info-head">Email Address</label>
		  		  			<div className="form-row">
		  		  				<div className="col"><input type="text" className="form-control" value={this.state.email} id="email" name="email" placeholder="Email Address" /></div>
		  		  			</div>	
		  		  		</div>
	  		  	</div>
	  		  </div>
	  		  <div className="row">
	  		  	<div className="col-4">
	  		  		<div className="form-group">
		  		  			<label for="first_name" className="personal-info-head">Mobile Numbers</label>
		  		  			<div className="form-row">
		  		  				<div className="col"><input type="text" className="form-control" value={this.state.mobile_number} id="mobile" name="mobile" placeholder="Mobile Number" /></div>
		  		  			</div>	
		  		  		</div>
	  		  	</div>
	  		  </div>
	  		  <div className="row">
	  		  	<div className="col-4">
	  		  		<div className="form-group">
		  		  			<label for="first_name" className="personal-info-head">Password</label>
		  		  			<div className="form-row">
		  		  				<div className="col"><input type="password" readonly="true" value="1234567" className="form-control" id="password" placeholder="Password" /></div>
		  		  			</div>	
		  		  		</div>
	  		  	</div>
	  		  </div>
	  		  <div className="row">
	  		  	<div className="col-4">
	  		  		<div className="form-group">
		  		  		<button onClick={ () => this.saveUser()} className="save-user" >Save</button>
		  		  	</div>
	  		  	</div>
	  		  </div>
  		  </div>		
  		</Fragment>
  		)
  }
}

export default ProfileInfo;