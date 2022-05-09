import React, { Component, Fragment } from "react";
import { Container, Carousel } from 'react-bootstrap';

const DesktopCarousel = (members) => {
	return "";
}

const MobileCarousel = (members) => {
	return "";
} 

class Member extends Component{

	

	render(){
		return(
			<Container style={{marginTop:60}}>
				<div className="row justify-content-center core-values people-row">People behind Bedmutha</div>
				
				  <Carousel controls={false} >
			            <Carousel.Item>
			              <div className="row">
				            <div className="col-md-4 text-center">
				              <img src={require("../../img/mask-group-1.png")} />
				              <div className="team-name">Shri K. R. Bedmutha</div>
				              <div className="team-position">
				                Chairman, Bedmutha group
				              </div>
				            </div>
				          	<div className="col-md-4 text-center">
				              <img src={require("../../img/group-9.png")}/>
				              <div className="team-name">Mr. Vijay K. Vedmutha</div>
				              <div className="team-position">
				                Director, Bedmutha group
				              </div>
				            </div>  
				            <div className="col-md-4 text-center">
				              <img src={require("../../img/mask-group.png")} />
				              <div className="team-name">Mr. Ajay K. Vedmutha</div>
				              <div className="team-position">
				                Director, Bedmutha group
				              </div>
				            </div>
				           </div> 
			            </Carousel.Item>

			            <Carousel.Item>
			              <div className="row">
				            <div className="col-md-4 text-center">
				              <img src={require("../../img/mask-group-1.png")} />
				              <div className="team-name">Shri K. R. Bedmutha</div>
				              <div className="team-position">
				                Chairman, Bedmutha group
				              </div>
				            </div>
				          	<div className="col-md-4 text-center">
				              <img src={require("../../img/group-9.png")}/>
				              <div className="team-name">Mr. Vijay K. Vedmutha</div>
				              <div className="team-position">
				                Director, Bedmutha group
				              </div>
				            </div>
				            <div className="col-md-4 text-center">
				              <img src={require("../../img/mask-group.png")} />
				              <div className="team-name">Mr. Ajay K. Vedmutha</div>
				              <div className="team-position">
				                Director, Bedmutha group
				              </div>
				            </div>
				          </div>  
			            </Carousel.Item>
			         
		          </Carousel>
        	</Container>
			);
	}
}

export default Member;