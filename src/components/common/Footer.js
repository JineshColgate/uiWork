import React, { Component } from "react";
import { Container } from 'react-bootstrap'; 


class Footer extends Component {
	render(){
		return(
			<div className="footer-background">
				<div className="row footer-main">
						<div className="col-md-9 col-12">
						<div className="row">
							<div className="col-md-3 col-6">
								<label className="footer-link-head">Bedmutha</label>
								<ul>
									<li className="footer-link">About Us</li>
									<li className="footer-link">Blogs</li>
									<li className="footer-link">Careers</li>
									<li className="footer-link">FAQs</li>
								</ul>
							</div>
							<div className="col-md-3 col-6">
								<label className="footer-link-head">Products</label>
								<ul>
									<li className="footer-link">Retail</li>
									<li className="footer-link">Automotive</li>
									<li className="footer-link">Infrastructure</li>
									<li className="footer-link">Power</li>
									<li className="footer-link">Copper</li>
									<li className="footer-link">Wire Ropes</li>
									
								</ul>
							</div>
							<div className="col-md-3 col-12">
								<label className="footer-link-head">Enquiry</label>
								<ul>
									<li className="footer-link">Product</li>
									<li className="footer-link">Partner</li>
									
								</ul>
							</div>
						  </div>
						</div>
						<div className="col-md-3 col-12">
							<div className="row">
								<label className="footer-follow-us">Follow Us</label><br/>
              				</div>
              				<div className="row">
              					<div className="col-md-1 col-1">
                      				<a className="social-media" href=""><img src={require("../../img/vector.svg")} className="Vector" /></a>
                    			</div>
			                    <div className="col-md-1 col-1">
			                      <a className="social-media" href=""><img src={require("../../img/group-twitter.svg")} className="Vector" /></a>
			                    </div>
			                    <div className="col-md-1 col-1">
			                      <a className="social-media" href=""><img src={require("../../img/group-linkdin.svg")} className="Vector" /></a>
			                    </div>
              				</div>
						</div>
					</div>

					<div className="row footer-last">
						<div className="col-md-5 col-4 text-right">
							2020 ©  Bedmutha Industries Ltd.
						</div>
						<div className="col-md-3 col-4 text-right">
							Privacy Policy
						</div>
						<div className="col-md-3 col-4">
							Terms & Conditions
						</div>
					</div>
			</div>



			);
	}
}

export default Footer;