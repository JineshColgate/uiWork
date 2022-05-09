import React, { Component, Fragment } from "react";

class ContactForm extends Component{
	
	render(){
		return(
			<div className="contact-form-main">
				<div className="row">
					<div className="col-md-6">
						<div className="row contact-logo-industry">
							<div className="col-md-3 col-3 contact-logo">
								<img src={require("../../img/logo-unit.png")} width="78px" heigth="109px"/>
							</div>
							<div className="col-md-9 col-9 contact-industry"> 
								<div className="industry-name"> BEDMUTHA INDUSTRIES LIMITED </div>
								<div className="web-name"> www.bedmutha.com </div>
							</div>
						</div>
						<div className="row address-main">
							<div className="col-md-6 col-6 justify-content-left">
								<div className="row">
									<img src={require("../../img/rectangle-38.png")} width="42px" heigth="8px"/>
								</div>
								<div className="row first-address">
									Nardana Complex
								</div>
								<div className="row second-address">
									E-1, Phase II , MIDC, Nardana, Dhule, Maharashtra
								</div>
								<div className="row">
									<div className="col-md-1 col-1 logo-address">
										<img src={require("../../img/mdi-call.png")}  width="24px" heigth="24px"/>
									</div>
									<div className="col-md-11 col-11 address-mobile">
										+91 7047 484 848
									</div>
								</div>
								<div className="row">
									<div className="col-md-1 col-1 logo-address">
										<img src={require("../../img/mdi-email.png")}  width="24px" heigth="24px"/>
									</div>
									<div className="col-md-11 col-11 address-mobile">
										+91 7047 484 848
									</div>
								</div>
							</div>
							<div className="col-md-6 col-6">
								<div className="row">
									<img src={require("../../img/rectangle-38.png")} width="42px" heigth="8px"/>
								</div>
								<div className="row first-address">
									Sinnar Complex
								</div>
								<div className="row second-address">
									E-1, Phase II , MIDC, Nardana, Dhule, Maharashtra
								</div>
								<div className="row">
									<div className="col-md-1 col-1 logo-address">
										<img src={require("../../img/mdi-call.png")}  width="24px" heigth="24px"/>
									</div>
									<div className="col-md-11 col-11 address-mobile">
										+91 7047 484 848
									</div>
								</div>
								<div className="row">
									<div className="col-md-1 col-1 logo-address">
										<img src={require("../../img/mdi-email.png")}  width="24px" heigth="24px"/>
									</div>
									<div className="col-md-11 col-11 address-mobile">
										+91 7047 484 848
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-md-6">
						<div className="enquiry-form form-group">
							<div className="row get-quote">
								Get a Quote
							</div>
							<div className="row inqury-input">
								<div className="col-md-6">
									<input type="text" className="form-control" name="name" id="name" placeholder="Name"/>
								</div>
								<div className="col-md-6">
									<input type="text" className="form-control" name="email" id="email" placeholder="Email"/>
								</div>
							</div>
							<div className="row inqury-input">
								<div className="col-md-12">
									<input type="text" className="form-control" name="company-name" id="company-name" placeholder="Company Name (Optional)"/>
								</div>
							</div>
							<div className="row inqury-input">
								<div className="col-md-12">
									<label for="exampleInputEmail1">Select Product</label>
									<input type="text" className="form-control" name="company-name" id="company-name" placeholder="Company Name (Optional)"/>
								</div>
							</div>
							<div className="row inqury-input">
								<div className="col-md-12">
									<textarea className="form-control" name="message" id="message" placeholder="Message"></textarea>
								</div>
							</div>
							<div className="row inqury-input">
								<div className="col-md-12">
									<button type="submit" className="send-enquiry">Send Enquiry</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			);
	}	
}

export default ContactForm