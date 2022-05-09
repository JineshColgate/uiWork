import React, { Component } from "react";
import { SignUp, SendOtp } from "../../services/api";
import {getAuth} from "../../helpers/constants";
import {handleLoginSuccess} from "../login";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

const validMobile = RegExp(/^[0-9\b]+$/);

const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

class SignUpForm extends Component {

  constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.state = {
            name: "",
            email: "",
            password: "",
            confPassword: "",
            mobile: "",
            showMessage: false,
            enter_otp: false,
            otp: "",
            errors: {
                name: "",
                email: "",
                password: "",
                mobile: "",
                confPassword: "",
                otp: ""
            }
        }
  }

  componentDidMount() {
     if(getAuth && getAuth.loggedIn){
       this.props.history.push("/");
     }
  }


  handleChange(event){
      event.preventDefault();
      const { name, value } = event.target;
      this.validateInputs(name, value);
  }

  handleSubmit(event){
        var signupDetails = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            password: this.state.password,
            confPassword: this.state.confPassword
           }
        let validateInputs = this.validateInputs.bind(this);   
        Object.keys(signupDetails).forEach(function(key) {
           validateInputs(key, signupDetails[key]);
        });

        if(validateForm(this.state.errors)) {
          var data = {
            user: {
              first_name: this.state.name,
              email: this.state.email,
              password: this.state.password,
              username: this.state.email
            },
            mobile_number: this.state.mobile
          }
          SignUp(data).then((response)=> {
           this.setState({
               enter_otp: true
            });
          });
        }else{
           return false;
        }

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
        case 'mobile': 
          errors.mobile = 
            (value.length > 0 && validMobile.test(value))
              ? ''
              : 'Mobile number is invalid!';
          break;  
        case 'password': 
          errors.password = 
            value.length < 5
              ? 'Password should be atleast of length 5'
              : '';
          break;
        case 'conf-password': 
          errors.confPassword = 
            value != this.state.password
              ? 'Confirm password and password does not match'
              : '';
          break;
        case 'otp':
          errors.otp = value.length != 6 ? "Enter valid OTP" : '';
          break;    
        default:
          break;
      }

      this.setState({errors, [name]: value})
    }

    handleOtpSubmit(mobile){
      var data = '{"otp_code": "'+parseInt(this.state.otp)+'","mobile_number":"'+ parseInt(mobile) +'" }'
      var json_data = JSON.parse(data);
      console.log(data);
      SendOtp(json_data).then((response) => {
        handleLoginSuccess(response.data);
        console.log(response.data);
      });
    }

    closeMessage(e){
        e.preventDefault();
        this.setState({showMessage: false});
    }
  
  render() {

    return (
      <section>
        <div className="row">
          <div className="col-md-6">
            <img src={require("../../img/dylan-mcleod-4-zqvu-9-dyv-sk-unsplash.png")} className="login-img" />
          </div>
          <div className="col-md-6">
              <div className="lg-container">
                <div className="row">
                  <div className="col-md-12 text-center sign-up-head">
                    Sign Up
                  </div>
                </div>
                {(!this.state.enter_otp) ? 
                    <div className="form-group">
                  {/*<div className="row">
                      <div className={this.state.showMessage ? "col-md-12 alert alert-success" : "col-md-12 alert alert-success invisible"}>
                         <a href="#" onClick={this.closeMessage} class="close" data-dismiss="alert" aria-label="close">&times;</a>
                          <strong>Signed Up successfully. </strong><span>Please <a href="/login">Login in</a>  </span>  
                      </div>
                  </div>*/}
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="text" className="form-control" onChange={this.handleChange} name="name" id="name" placeholder="Name"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.name.length > 0 ? <span className="text-danger">{this.state.errors.name}</span> : "" }
                    </div>
                  </div>
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="text" className="form-control" onChange={this.handleChange}  name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.email.length > 0 ? <span className="text-danger">{this.state.errors.email}</span> : "" }
                    </div>
                  </div>
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="text" className="form-control" onChange={this.handleChange}  name="mobile" id="mobile" placeholder="Mobile Number"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.mobile.length > 0 ? <span className="text-danger">{this.state.errors.mobile}</span> : "" }
                    </div>
                  </div>
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="password" className="form-control" onChange={this.handleChange}  name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.password.length > 0 ? <span className="text-danger">{this.state.errors.password}</span> : "" }
                    </div>
                  </div>
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="password" className="form-control" onChange={this.handleChange}  name="conf-password" id="conf-password" placeholder="Confirm Password"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.confPassword.length > 0 ? <span className="text-danger">{this.state.errors.confPassword}</span> : "" }
                    </div>
                  </div>
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <button type="submit" onClick={this.handleSubmit}  className="send-otp-btn">Sign Up</button>
                    </div>
                  </div>
                  <div className="row already-member-main">
                    <div className="col-md-12 text-center">
                      <span className="already-member">Already a member? </span><a href="/login" className="login-now">Login Now</a>
                    </div>
                  </div>

                </div> : 


                <div className="form-group">
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="text" className="form-control" onChange={this.handleChange} name="otp" id="otp" placeholder="Enter OTP"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.otp.length > 0 ? <span className="text-danger">{this.state.errors.otp}</span> : "" }
                    </div>
                  </div>

                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <button type="submit" onClick={ () => this.handleOtpSubmit(this.state.mobile) }  className="send-otp-btn">Submit OTP</button>
                    </div>
                  </div>

                </div>

                }
                
                
                <div className="row"></div>
              </div>
          </div>
        </div>
      </section>   
      
    );
  }
}
export default SignUpForm;
