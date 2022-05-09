import React, { Component, Fragment } from "react";
import Member from "../home/Member";
import ClientCount from "../home/ClientCount";
import { GetReports } from "../../services/api";

class AboutUs extends Component{

	render() {
		
		return(
			<Fragment>
				<section>
					<div className="row text-center">
            			<img src={require("../../img/mask-group-1-2.png")} className="banner" width="1292px" height="604px" />
          			</div>

				</section>

				<section className="section">
		          <div className="row">
		            <div className="col-md-5 about-section">
		              <div className="row about-bedmutha">
		                About Bedmutha
		              </div>
		              <div className="row growth-content">
		                Established in 1988, Bedmutha Industries Ltd India is the flagship company of Bedmutha Group and a leading manufacturer and exporter of Steel Wire Ropes , Galvanised Wires, Spring steel wire, Tyre bead wire, Wire for ropes , Galvanized Patented Wire, Phosphate Patented Wire, ACSR Core Wire, Cable Armouring Wire, Earth Wire, Stay Wire, Barbed Wire ,Copper Bus Bars, Copper Rods, Copper foils, Copper wires & Copper cables. 

		                <a href="#" className="read-more button">Contact Us</a>
		              </div>
		            </div>
		            <div className="row col-md-7">
		              <img src={require("../../img/mask-group-2.png")} className="about-img" />
		            </div>
		          </div>
		        </section>
		        <Member />

		        <section style={{ marginTop: "50px"}}>
		        	<div className="row justify-content-center core-values">Our Core Strengths</div>
		        	<div className="strength-main">
			        	<div className="row strength-row">
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/group-90.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Certified
			        			</div>
			        			<div className="row text-center strength-sm">
			        				Certifed by TüV Nord
			        			</div>
			        		</div>
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/steel.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Material
			        			</div>
			        			<div className="row text-center strength-sm">
			        				Best raw material used by industry standards 
			        			</div>
			        		</div>
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/flat.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Export
			        			</div>
			        			<div className="row text-center strength-sm">
			        				Experienced in global exports, 80% of our wire rope and 20% of our GI wire produced is exported anually.
			        			</div>
			        		</div>
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/group-89.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Manpower
			        			</div>
			        			<div className="row text-center strength-sm">
			        				Highly skilled and dedicated manpower maintain our elite product quality.
			        			</div>
			        		</div>
			        	</div>	
			        	<div className="row strength-row">
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/copper.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Product
			        			</div>
			        			<div className="row text-center strength-sm">
			        				Products that guarantee trust and durabiity
			        			</div>
			        		</div>
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/relationship.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Partnership
			        			</div>
			        			<div className="row text-center strength-sm">
			        				Long lasting, valued client and distributor partnership.
			        			</div>
			        		</div>
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/globe.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Machineries
			        			</div>
			        			<div className="row text-center strength-sm">
			        				State of the art production plant. 
			        			</div>
			        		</div>
			        		<div className="col-md-3">
			        			<div className="row justify-content-center strength-sm">
			        				<img src={require("../../img/port.png")} />
			        			</div>	
			        			<div className="row justify-content-center strength-head strength-sm">
			        				Easy Acess to Port
			        			</div>
			        			<div className="row text-center strength-sm">
			        				Our factory is situated in close proximity to JNPT port.
			        			</div>
			        		</div>
			        	</div>
		        	</div>
		        </section>
		        <section className="section">
		        	<ClientCount />
		        </section>
		        <section className="section section-background">
		        	<div className="row certificate-main">
		        		<div className="col-md-6 certificates">Certifications</div>
		        		<div className="col-md-6 text-right" style={{ marginTop: "25px" }}><a href="#" className="view-all">View all</a></div>
		        	</div>
		        	<div className="row" style={{padding: "40px"}}>
		        		<div className="col-md-4">
		        			<div className="row justify-content-center strength-sm">
		        				<img src={require("../../img/pngfind-com-iso-9001-png-3775466.png")} />
		        			</div>	
		        			<div className="row justify-content-center strength-head strength-sm">
		        				ISO 9001:2008
		        			</div>
		        			<div className="row text-center strength-sm">
		        				Lorem ipsum dlor Lorem ipsum 
								dlor Lorem ipsum dlor Lorem 
								ipsum dlor Lorem ipsum dlor 
								Lorem ipsum dlor
		        			</div>
		        			<div className="row justify-content-center"><a href="#" className="view-all-cert">View Full Certificate</a></div>
			        	</div>
			        	<div className="col-md-4">
		        			<div className="row justify-content-center strength-sm">
		        				<img src={require("../../img/rsz_toppng-com-bureau-of-indian-standards-logo-vector-free-download-400-x-400.png")} />
		        			</div>	
		        			<div className="row justify-content-center strength-head strength-sm">
		        				Approved by BIS
		        			</div>
		        			<div className="row text-center strength-sm">
		        				Lorem ipsum dlor Lorem ipsum 
								dlor Lorem ipsum dlor Lorem 
								ipsum dlor Lorem ipsum dlor 
								Lorem ipsum dlor
		        			</div>
		        			<div className="row justify-content-center"><a href="#" className="view-all-cert">View Full Certificate</a></div>
			        	</div>
			        	<div className="col-md-4">
		        			<div className="row justify-content-center strength-sm">
		        				<img src={require("../../img/pngfind-com-iso-9001-png-3775466.png")} />
		        			</div>	
		        			<div className="row justify-content-center strength-head strength-sm">
		        				ISO 9001:2008
		        			</div>
		        			<div className="row text-center strength-sm">
		        				Lorem ipsum dlor Lorem ipsum 
								dlor Lorem ipsum dlor Lorem 
								ipsum dlor Lorem ipsum dlor 
								Lorem ipsum dlor
		        			</div>
		        			<div className="row justify-content-center"><a href="#" className="view-all-cert">View Full Certificate</a></div>
			        	</div>
		        	</div>

		        </section>
			</Fragment>

			);
	}
}

export default AboutUs;
