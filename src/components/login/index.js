import React, { Component, useContext } from "react";
import { SignIn } from "../../services/api";
import {getAuth} from "../../helpers/constants";


const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

// const validMobile = RegExp(/^[0-9\b]+$/);

const validateForm = (errors) => {
  let valid = true;

  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}

export const handleLoginSuccess = (result) => {
    const user = {
      loggedIn: true,
      username: result.user.email,
      userToken: result.token
    }
    localStorage.setItem('userAuth', JSON.stringify(user));
 }

class Login extends Component {

  constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.closeMessage = this.closeMessage.bind(this);
        this.state = {
            email: "",
            password: "",
            showMessage: false,
            showError: false,
            errors: {
                email: "",
                password: ""
            }
        }
  }

  handleChange(event){
      event.preventDefault();
      const { name, value } = event.target;
      this.validateInputs(name, value);
  }

  componentDidMount() {
     if(getAuth && getAuth.loggedIn){
       this.props.history.push("/");
     }
  }


  handleSubmit(event){
        var loginDetails = {
            email: this.state.email,
            password: this.state.password
           }
        let validateInputs = this.validateInputs.bind(this);   
        Object.keys(loginDetails).forEach(function(key) {
           validateInputs(key, loginDetails[key]);
        });

        if(validateForm(this.state.errors)) {
          var data = {
              username: this.state.email,
              password: this.state.password
          }
          SignIn(data).then((response)=> {
          	handleLoginSuccess(response.data);
          	window.location.reload(false);
          }).catch(err => {
    		if (err.response.status === 404) {
      		   let setState = this.setState.bind(this);
	            setState({
	               email: "",
	               password: "",
	               showMessage: false,
	               showError: true
	            })
    		}
  		});
        }else{
           return false;
        }

    }


  validateInputs(name, value){
      let errors = this.state.errors;
      switch (name) {
        
        case 'email': 
          errors.email = 
            (value.length > 0 && validEmailRegex.test(value))
              ? ''
              : 'Email is invalid!';
          break;
        
        case 'password': 
          errors.password = 
            value.length == 0
              ? 'Password is required'
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
                    Login
                  </div>
                </div>
                <div className="form-group">
                  <div className="row">
                      <div className={this.state.showMessage ? "col-md-12 alert alert-success" : "col-md-12 alert alert-success collapse"}>
                         <a href="#" onClick={this.closeMessage} class="close" data-dismiss="alert" aria-label="close">&times;</a>
                          <strong>Signed Up successfully. </strong><span>Please <a href="/login">Login in</a>  </span>  
                      </div>
                      <div className={this.state.showError ? "col-md-12 alert alert-danger" : "col-md-12 alert alert-success collapse"}>
                         <a href="#" onClick={this.closeMessage} class="close" data-dismiss="alert" aria-label="close">&times;</a>
                          <strong>Incorrect </strong> <span> Credentails </span>  
                      </div>
                  </div>
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="text" className="form-control" onChange={this.handleChange} autocomplete="off" value={this.state.email}  name="email" id="email" placeholder="Email"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.email.length > 0 ? <span className="text-danger">{this.state.errors.email}</span> : "" }
                    </div>
                  </div>
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <input type="password" className="form-control" onChange={this.handleChange} value={this.state.password}  name="password" id="password" placeholder="Password"/>
                    </div>
                    <div className="col-md-12">
                        {this.state.errors.password.length > 0 ? <span className="text-danger">{this.state.errors.password}</span> : "" }
                    </div>
                  </div>
                  
                  <div className="row login-form-input">
                    <div className="col-md-12">
                      <button type="submit" onClick={this.handleSubmit}  className="send-otp-btn">Log In</button>
                    </div>
                  </div>
                  <div className="row already-member-main">
                    <div className="col-md-12 text-center">
                      <span className="already-member">Not a member? </span><a href="/sign-up" className="login-now">Sign Up</a>
                    </div>
                  </div>

                </div>
                
                <div className="row"></div>
              </div>
          </div>
        </div>
      </section>   
      
    );
  }
}
export default Login;