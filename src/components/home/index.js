import React, { Component, Fragment } from "react";
import ContactForm from "../contact_form";
import Member from "./Member";
import ClientCount from "./ClientCount";
import { Container, Carousel } from 'react-bootstrap'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Home extends Component {

	render(){
    return(
    <Fragment>
        <section style={{marginLeft: '5%', marginRight: '5%', marginTop: 20}}>
          <div className="row text-center">
            <img src={require("../../img/mask-group-1-2.png")} height={700} width={'100%'}/>
          </div>
        </section>

        <Container className="section-background" style={{marginTop: 60}}>
          <div className="row">
            <div className="col-8 chairman-note">
              Chairman's note
            </div>
            <div className="col-4 text-right">
              <img src={require("../../img/logo-unit.svg")} className="col-md-3 Logo-unit logo-margin" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 youtube-video">
              <iframe className="youtube-frame" src="https://www.youtube.com/embed/ev1Um3mf0Mw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 text-right">
              <div className="growth text-left">
                We at Bedmutha group believe in powering the growth.
              </div>
              <div className="growth-content text-justify">
                Bedmutha Industries has had a great industrial journey so far and will continue to strengthen our presence with high quality products that are vital for the integral growth of our country. Our two new projects will become integral to the country’s progress and development. The recently awarded mega project status is a feather in our cap. We are determined to lead by example by harnessing the best of technology and experience to create world className products and services.
              </div>
              <div className="text-left">
                <div className="chairman-signature">
                  Mr. K. R. Bedmutha
                </div>
                <div className="chairman-desig">
                  Chairman, Bedmutha group
                </div>
              </div>
            </div>
          </div>
        </Container>
        {/*<Container style={{marginTop:50}}>*/}
        {/*  <div className="row">*/}
        {/*    <div className="col-md-6 col-lg-6 col-sm-12 about-section">*/}
        {/*      <div className="about-bedmutha">*/}
        {/*        About Bedmutha*/}
        {/*      </div>*/}
        {/*      <div className="growth-content text-justify about-sm" >*/}
        {/*        Established in 1988, Bedmutha Industries Ltd India is the flagship company of Bedmutha Group and a leading manufacturer and exporter of Steel Wire Ropes , Galvanised Wires, Spring steel wire, Tyre bead wire, Wire for ropes , Galvanized Patented Wire, Phosphate Patented Wire, ACSR Core Wire, Cable Armouring Wire, Earth Wire, Stay Wire, Barbed Wire ,Copper Bus Bars, Copper Rods, Copper foils, Copper wires & Copper cables. <br/>*/}
        {/*        <a href="/about-us" className="read-more">Read more</a>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="col-md-8">*/}
        {/*      <img src={require("../../img/about-bedmutha.jpeg")} className="home-about-img" />*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</Container>*/}

        <section style={{margin:70}}>
            <Row>
                <Col xs={6}>
                    <div className="about-bedmutha">
                        About Bedmutha
                    </div>
                    <div className="growth-content text-justify about-sm" >
                        Established in 1988, Bedmutha Industries Ltd India is the flagship company of Bedmutha Group and a leading manufacturer and exporter of Steel Wire Ropes , Galvanised Wires, Spring steel wire, Tyre bead wire, Wire for ropes , Galvanized Patented Wire, Phosphate Patented Wire, ACSR Core Wire, Cable Armouring Wire, Earth Wire, Stay Wire, Barbed Wire ,Copper Bus Bars, Copper Rods, Copper foils, Copper wires & Copper cables. <br/>
                        <a href="/about-us" className="read-more">Read more</a>
                    </div>
                </Col>
                <Col xs={6}>
                    <img src={require("../../img/about-bedmutha.jpeg")} className="home-about-img" />
                </Col>
            </Row>
        </section>

        <Container style={{marginTop:60}}>
            <div className="map-back">
                <ClientCount />
            </div>
        </Container>        

        <Container style={{marginTop:60}}>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 text-center core-values">Bedmutha’s Core Values</div>
          </div>
          <div className="row trust-row">
            <div className="col-md-4 col-lg-4 col-sm-12 text-center trust-col">
              <img src={require("../../img/relationship.svg")} />
              <div className="trust">Trust</div>
              <div className="trust-detail">
                Trusted by customers for our excellent products.
              </div>
            </div>
          <div className="col-md-4 col-lg-4 col-sm-12 text-center trust-col">
              <img src={require("../../img/group.png")} />
              <div className="trust">Strength</div>
              <div className="trust-detail">
                We believe in strenghth of our products and relationships.
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 text-center trust-col">
              <img src={require("../../img/group-91.png")} />
              <div className="trust">Quality</div>
              <div className="trust-detail">
                Products that define quality.
              </div>
            </div>
          </div>

          <div className="row trust-row">
            <div className="col-md-4 col-lg-4 col-sm-12 text-center trust-col">
              <img src={require("../../img/group-hammer.png")} width="82px" />
              <div className="trust">Durability</div>
              <div className="trust-detail">
                Wires that last for generations just like our presence.
              </div>
            </div>
          <div className="col-md-4 col-lg-4 col-sm-12 text-center trust-col">
              <img src={require("../../img/group-89.png")} />
              <div className="trust">Reliability</div>
              <div className="trust-detail">
                Globally certified, state of the art technologies and best in class practises.
              </div>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 text-center trust-col">
              <img src={require("../../img/group-90.png")} />
              <div className="trust">Credibility</div>
              <div className="trust-detail">
                Globally certified, state of the art technologies and best in class practises.
              </div>
            </div>
          </div>
        </Container>

        <Member />

        <Container className="section-background" style={{marginTop:60}}>
          <div className="row">
            <div className="col-md-6 product-header text-left">Products</div>
            <div className="col-md-6 text-right"><a href="#" className="explore-more">Explore More</a></div>
          </div>
        </Container>

        <Container style={{marginTop:60}}>
          <div className="row">
            <div className="col-md-4 col-lg-4 col-sm-12 trusted-row">
              <div className="trusted-by">Trusted By</div>
              <div className="client-number">200+</div>
              <div className="client-globe">Clients across globe</div>
            </div>
            <div className="col-md-8 col-lg-8 col-12 client-image-row">
              <div className="row"> 
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/leoni-01-1.jpg")} className="client-image" />                
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/legrand-01-1.png")} className="client-image" />                  
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/cci-ammunition-vector-logo-1.png")} className="client-image" />                  
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/normal_60e242063cf09656.png")} className="client-image" />
                </div>
              </div>
              <div className="row"> 
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/power-grid-corporation-of-india-01-1.jpg")} className="client-image" />
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/bhel-01-1.png")} className="client-image" />
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/getpreview-1.png")} className="client-image" />
                </div>
                <div className="col-md-3 col-lg-3 col-6">
                  <img src={require("../../img/screenshot-2020-05-29-at-1-40-1.png")} className="client-image" />
                </div>
              </div>
            </div>
          </div>
        </Container>
        <section>
          <div className="row legrand">
            <div className="col-md-12 legrand-head text-center">
              Bedmutha
            </div>
            <Carousel indicators={false}>
            <Carousel.Item>
                <div className="col-md-12 justify-content-center text-center comma-logo">
                  “
                </div>
                <div className="testimonal text-justify">
                  Bedmutha being a very famous brand, I used a single bungle 4 years ago on trial basis. The quality is so good, the entire district of Jalna now uses Bedmutha wires.
                  If the wires break before harvesting the crops it results into a huge loss,I trust on Bedmutha over any other brand for durable product.
                </div>
                <div className="col-md-12  text-center testimonal-name">
                  Sundar Dinkar Ingole
                </div>
                <div className="col-md-12 text-center testimonal-designation">
                  Farmer, Jalna, Maharashtra
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="col-md-12 justify-content-center text-center comma-logo">
                  “
                </div>
                <div className="testimonal text-justify">
                  Bedmutha being a very famous brand, I used a single bungle 4 years ago on trial basis. The quality is so good, the entire district of Jalna now uses Bedmutha wires.
                  If the wires break before harvesting the crops it results into a huge loss,I trust on Bedmutha over any other brand for durable product.
                </div>
                <div className="col-md-12  text-center testimonal-name">
                  Mr. Vijay K. Vedmutha
                </div>
                <div className="col-md-12 text-center testimonal-designation">
                  Farmer, Jalna, Maharashtra
                </div>
              </Carousel.Item>
            </Carousel>

          </div>
          <div className="row">
            <ContactForm/>
            <img src={require('../../img/contact-form-back.jpeg')} className="home-contact-form" height={900}/>
          </div>
        </section>
    </Fragment>
    );   
	}

}

export default Home
