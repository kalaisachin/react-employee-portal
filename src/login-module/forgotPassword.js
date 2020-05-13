import React, {Component} from 'react';
import {Link} from "react-router-dom";
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
import $ from 'jquery';

class ForgotPassword extends Component{
    render(){
        return (
                <div class='limiter'>
                    <div class="container-login100">
                        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                            <form class="login100-form validate-form">
                                <span class="login100-form-title p-b-33">
                                    Forgot Password
                                </span>
                                <div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                    <input class="input100" type="text" name="email" placeholder="Email" />
                                    <span class="focus-input100-1"></span>
                                    <span class="focus-input100-2"></span>
                                </div>

                                <div class="container-login100-form-btn m-t-20">
                                    <button class="login100-form-btn">
                                        Get password
                                    </button>
                                </div>

                                <div class="text-center p-t-45 p-b-4">
                                    <span class="txt1">
                                        Already Account
                                    </span>&nbsp;

                                    <Link to={'/login'} class="txt2 hov1">
                                        Login
                                    </Link>
                                </div>

                                <div class="text-center">
                                    <span class="txt1">
                                        Create an account?
                                    </span>

                                    <Link to={'/signUp'} class="txt2 hov1">
                                        Sign up
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
          );
    }  
    
}

export default ForgotPassword;