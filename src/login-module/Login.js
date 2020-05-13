import React from 'react';
import {Link, Redirect} from "react-router-dom";
import { GoogleLogin } from 'react-google-login';
//import { FontAwesome } from '@fortawesome/react-fontawesome'
//import '../node_modules/font-awesome/css/font-awesome.min.css';
//import FacebookLogin from 'react-facebook-login'; 
//import LinkedIn from "linkedin-login-for-react";
import axios from "axios";
import '../home-module/home.css';
import '../utilities/css/util.css';
import '../utilities/css/main.css';
import '../utilities/vendor/select2/select2.min.css';
import '../utilities/vendor/daterangepicker/daterangepicker.css';
import '../utilities/vendor/animsition/css/animsition.min.css';
import '../utilities/vendor/css-hamburgers/hamburgers.min.css';
import '../utilities/vendor/animate/animate.css';
import '../utilities/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../utilities/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import '../utilities/vendor/bootstrap/css/bootstrap.min.css';
import '../utilities/images/icons/favicon.ico';
import '../utilities/jquery-confirm/js/jquery-confirm.js';
import '../utilities/jquery-confirm/css/jquery-confirm.css';
import $ from 'jquery';

class Login extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            username : '',
            password : '',
            redirctState: false,
        }
        this.usernameHandleChange = this.usernameHandleChange.bind(this);
        this.passwordHandleChange = this.passwordHandleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.loggedIn = this.loggedIn.bind(this);
        this.doRedirect = this.doRedirect.bind(this);
      }
      doRedirect = () =>{
          alert("getting in ... ")
        this.setState({redirectState : true});
      }
      loggedIn(){
          this.setState({redirctState: true});  
      }
      usernameHandleChange(event) {
        this.setState({
            username: event.target.value
        });
      }
      passwordHandleChange(event) {
        this.setState({
            password: event.target.value
        });
      }
      handleSubmit(event) {
        const username = this.state.username;
        const password = this.state.password;
        axios.get("http://localhost:8080/finduser/"+username,{})
        .then((res)=>{
            if(res !== null && password === res.data[0].password){
                localStorage.setItem("userData", res);
                localStorage.setItem("userName", res.data[0].username);
                this.loggedIn();
            }else{
                $.alert({
                    title: 'Error !',
                    theme: 'supervan',
                    content: 'Login Faield check your username & password !',
                    buttons: {
                        info: {
                            btnClass: 'btn-blue',
                            text : 'Ok'
                        }
                    }
                });
            }
            }).catch((error)=>{
                $.alert({
                    title: 'Error !',
                    theme: 'supervan',
                    content: 'There was a Error in Api call !',
                    buttons: {
                        info: {
                            btnClass: 'btn-blue',
                            text : 'Ok'
                        }
                    }
                });
            });
    }

    render(){
        const responseGoogle = (response) => {
        if(response.profileObj){
            let username = response.profileObj.email;
            username = username.split("@")[0];
            axios.get("http://localhost:8080/checkUserAvailability/"+username,{})
                .then((res)=>{
                    if(res.data.listLength == 0){
                        let alternativeEmail = response.profileObj.email;
                        let password = response.profileObj.givenName+"@123";
                        let firstName = response.profileObj.givenName;
                        let lastName =  response.profileObj.familyName;
                        let imageUrl =  response.profileObj.imageUrl;
                        
                        var inputs = {
                            username : username,
                            password : password,
                            firstName : firstName,
                            lastName : lastName,
                            userProfile : {
                                alternativeEmail : alternativeEmail,
                                imageUrl : imageUrl
                            }
                        }

                        axios({
                            method: 'post',
                            url: 'http://localhost:8080/create/',
                            data: inputs
                        })
                        .then((res)=>{
                            $.alert({
                                title: 'Success!',
                                content: 'Signed Up Successfully with Google ... !',
                                theme: 'supervan',
                                buttons: {
                                    info: {
                                        btnClass: 'btn-blue',
                                        text: 'Ok'
                                    }
                                }
                            });
                            localStorage.setItem("userData", response);
                            localStorage.setItem("userName", username);
                            this.loggedIn();
                            }).catch((error)=>{
                                $.alert({
                                    title: 'Error !',
                                    content: 'There is an Error in API call !',
                                    theme: 'supervan',
                                    buttons: {
                                        info: {
                                            btnClass: 'btn-blue',
                                            text: 'Ok'
                                        }
                                    }
                                });
                            });
                    }else{
                        localStorage.setItem("userData", response);
                        localStorage.setItem("userName", username);
                        this.loggedIn();
                    }
                }).catch((error)=>{
                        
                });
            }
        }
        if(this.state.redirctState){
            return (<Redirect to={'/home'} />);
        }
        if(localStorage.getItem("userData")){
            return (<Redirect to={'/home'} />);
        }
        return (
                <div class='limiter'>
                    <div class="container-login100">
                        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                                <span class="login100-form-title p-b-33">
                                    Login
                                </span>
                                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input class="input100" value = {this.state.username} type="text" name="username" placeholder="Username" onChange={this.usernameHandleChange}/>
                                    <span class="focus-input100-1"></span>
                                    <span class="focus-input100-2"></span>
                                </div>
                                <div class="wrap-input100 rs1 validate-input" data-validate="Password is required">
                                    <input class="input100" value = {this.state.password} type="password" name="password" placeholder="Password" onChange={this.passwordHandleChange}/>
                                    <span class="focus-input100-1"></span>
                                    <span class="focus-input100-2"></span>
                                </div>
                                    <div class="container-login100-form-btn m-t-20">
                                       <button type="button" class="login100-form-btn" onClick={this.handleSubmit}> 
                                            Sign in
                                        </button>
                                    </div>
                                <div class="text-center p-t-45 p-b-4">
                                    <span class="txt1">
                                        Forgot
                                    </span>&nbsp;

                                    <Link to={'/forgotPassword'} class="txt2 hov1">
                                         Password?
                                    </Link>
                                </div>

                                <div class="text-center">
                                    <span class="txt1">
                                        Create an account?
                                    </span>

                                    <Link to={'/signUp'}> Sign up </Link>
                                </div>
                                <div class="container-login100-form-btn m-t-20 m-l-116">
                                    <GoogleLogin
                                        clientId={'522617952584-apvgpkgsrk88ag9i2004i9tv3j8eu3kq.apps.googleusercontent.com'}
                                        onSuccess={responseGoogle}
                                        onFailure={responseGoogle}>
                                    <span class="google-login"> Login with Google</span>
                                    </GoogleLogin>
                                </div>
                        </div>
                    </div>
                </div>
          );
    }  
    
}

export default Login;