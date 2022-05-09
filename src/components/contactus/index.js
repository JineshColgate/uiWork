import React, { Component, Fragment } from "react";
import {ContactStatic, SaveContact } from "../../services/api";
import { Container, Row, Navbar, Nav , Col, Dropdown } from 'react-bootstrap'; 

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class ContactUs extends Component{

    constructor(props) {
        super(props);
        this.getContactStatic = this.getContactStatic.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.saveContact = this.saveContact.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.state = {
            purposes: {},
            name: "",
            email: "",
            purpose: null,
            message: "",
            showMessage: false,
            errors: {
                name: "",
                email: "",
                purpose: "",
                message: "",    
            }
        }
    }

    componentDidMount() {
        this.getContactStatic();
    }

    getContactStatic(){
        ContactStatic().then((data)=> {
          this.handleReponse(data.data);
        })
    }

    saveContact(event){
        var contactDetails = {
            name: this.state.name,
            email: this.state.email,
            purpose: this.state.purpose,
            message: this.state.message
           }
        let validateInputs = this.validateInputs.bind(this);   
        Object.keys(contactDetails).forEach(function(key) {
           validateInputs(key, contactDetails[key]);
        });

        if(validateForm(this.state.errors)) {
          SaveContact(contactDetails).then((data)=> {

          })
          let setState = this.setState.bind(this);
            setState({
               name: "",
               email: "",
               purpose: null,
               message: "",
               showMessage: true
            });
        }else{
           return false;
        }

    }

    handleReponse(response){
        this.setState({purposes: response.purposes});
    }

    handleChange(event){
      event.preventDefault();
      const { name, value } = event.target;
      this.validateInputs(name, value);
    }

    validateInputs(name, value){
      let errors = this.state.errors;
      switch (name) {
        case 'name': 
          errors.name = 
            value.length == 0
              ? 'Name is required'
              : '';
          break;
        case 'email': 
          errors.email = 
            (value.length > 0 && validEmailRegex.test(value))
              ? ''
              : 'Email is invalid!';
          break;
        case 'purpose': 
          errors.purpose = 
            value == null
              ? 'Please select purpose'
              : '';
          break;
        case 'message': 
          errors.message = 
            value.length == 0
              ? 'Please enter message'
              : '';
          break;  
        default:
          break;
      }

      this.setState({errors, [name]: value})
    }

    closeMessage(e){
        e.preventDefault();
        this.setState({showMessage: false});
    }

    render(){
        return(
            <Fragment>
                <Container>
                    <div className="row hear-from-you justify-content-center">
                        We would love to hear from you
                    </div>
                </Container>
                <Container className="contact-section">
                    <div className="row">
                        <div className="col-md-8">
                            <img src={require("../../img/621164-pnubhq-822.png")} className="contact-img" />
                        </div>
                        <div className="col-md-4">
                                <div className="form-group">
                                    <div className="row">
                                        <div className={this.state.showMessage ? "col-md-12 alert alert-success" : "col-md-12 alert alert-success invisible"}>
                                           <a href="#" onClick={this.closeMessage} class="close" data-dismiss="alert" aria-label="close">&times;</a>
                                            <strong>Message added successfully </strong>  
                                        </div>
                                    </div>
                                    <div className="row inqury-input">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control high-input" onChange={this.handleChange} value={this.state.name} name="name" id="name" placeholder="Name"/>
                                        </div>
                                        <div className="col-md-12">
                                            {this.state.errors.name.length > 0 ? <span className="text-danger">{this.state.errors.name}</span> : "" }
                                        </div>
                                    </div>
                                    <div className="row inqury-input">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control high-input" onChange={this.handleChange} value={this.state.email} name="email" id="email" placeholder="Email"/>
                                        </div>
                                        <div className="col-md-12">
                                            {this.state.errors.email.length > 0 ? <span className="text-danger">{this.state.errors.email}</span> : "" }
                                        </div>
                                    </div>
                                    <div className="row inqury-input">
                                        <div className="col-md-12">
                                            <select name="purpose" onChange={this.handleChange} value={this.state.purpose} className="form-control high-input" id="purpose">
                                               <option value selected>Select Purpose</option>    
                                              {
                                                Object.keys(this.state.purposes).map((key, i) => (
                                                    <option value={key} >{this.state.purposes[key]}</option>    
                                                    ))
                                              }
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            {this.state.errors.purpose.length > 0 ? <span className="text-danger">{this.state.errors.purpose}</span> : "" }
                                        </div>
                                    </div>
                                    <div className="row inqury-input">
                                        <div className="col-md-12">
                                            <textarea className="form-control high-input" onChange={this.handleChange} value={this.state.message} name="message" id="message" placeholder="Message"></textarea>
                                        </div>
                                        <div className="col-md-12">
                                            {this.state.errors.message.length > 0 ? <span className="text-danger">{this.state.errors.message}</span> : "" }
                                        </div>
                                    </div>
                                    <div className="row inqury-input">
                                        <div className="col-md-12">
                                            <button type="submit" onClick={this.saveContact} className="send-enquiry high-input" style={{width: "100%"}}>SEND</button>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </Container>

                <Container>
                    
                    <div className="row reach-out-main">
                        <div className="col-md-5 col-12 reach-out-div">
                            <div className="row reach-out">
                                Reach out to us
                            </div>
                            <div className="row">
                                We would love to hear from you
                            </div>
                        </div>
                        <div className="col-md-7 contact-info-main">
                            <div className="row">
                                <div className="col-md-6 phone-contact">
                                    <label className="phone-contact-name">Phone</label>
                                    <span className="phone-number">+91 9839123456</span>
                                </div>
                                <div className="col-md-6 email-contact">
                                    <label className="phone-contact-name">Email</label>
                                    <span className="phone-number">bedmuthahead@gmail.com</span>
                                </div>
                            </div>
                            <div className="row address-contact-info">

                                <div className="col-md-12">
                                    <label className="phone-contact-name">Address</label>
                                    <span className="phone-number">Bedmutha Pvt Ltd, 1st Floor, 3 Avenue, Maker 
                                    Maxity, Bandra East, Mumbai, 400051, India</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </Container>
            </Fragment>
            );
    }
}

export default ContactUs;