import React, { Component, Fragment } from "react";
import ProfileInfo from "./ProfileInfo";
import Cart from "./Cart";
import MyEnquiries from "./MyEnquiries";
import queryString from 'query-string';

class Profile extends Component{

  constructor(props){
  	super(props);

  	this.state = {
			active_component: props.match.params.active_component
		}
  }

  renderComponent(){
  	{
		if(this.state.active_component == "profile_info"){
			return <ProfileInfo/>;
		}else if(this.state.active_component == "my_enquiries"){
			return <MyEnquiries/>;
		}else if(this.state.active_component == "cart"){
			return <Cart/>;
		}else{
			return <ProfileInfo/>;
		}
	}
  }



  render(){
  	return(
  		<Fragment>
  		 <div className="container">
  		  <div className="row mt-5">
  		  	<div className="col-3 acc-nav">
  		  	  <div className="row acc-name profile-div">
  		  	  	<div className="col-4">
  		  	  		<img src={require("../../img/profile.png")} />
  		  	  	</div>
  		  	  	<div className="col-8 profile-name">
  		  	  		Mehul Moleshwari
  		  	  	</div>
  		  	  </div>
  		  	  <div className="row profile-div mt-3 profile-nav">
  		  	  	<div className="col-12 profile-nav-hd profile-info-hd">
  		  	  		<a href={"/profile/profile_info"} className="profile-nav-hd">Profile Information</a>
  		  	  	</div>
  		  	  	<div className="col-12">
  		  	  		<a href={"/profile/cart"} className="profile-nav-hd">Cart</a>
  		  	  	</div>
  		  	  	<div className="col-12 profile-hd">
  		  	  		<a href={"/profile/my_enquiries"} className="profile-nav-hd">Enquiries</a>
  		  	  	</div>
  		  	  </div>
  		  	  <div className="row profile-div mt-3 profile-nav">
  		  	  	<div className="col-12 profile-nav-hd profile-info-hd">
  		  	  		<a href={"/contact-us"} className="profile-nav-hd">Contact Us</a>
  		  	  	</div>
  		  	  	<div className="col-12 profile-hd">
  		  	  		FAQ
  		  	  	</div>
  		  	  </div>
  		  	</div>
  		  	<div className="col-8 profile-div main-profile-con">
  		  		{this.renderComponent()}
  		  	</div>
  		  </div>
  		  </div>
  		</Fragment>
  		)
  }
}

export default Profile;