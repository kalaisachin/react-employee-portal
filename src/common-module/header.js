import React from 'react';
import {Redirect, Link} from "react-router-dom";
import '../login-module/Login.css';
import '../utilities/css/util.css';
import '../utilities/css/main.css';
import '../utilities/vendor/select2/select2.min.css';
import '../utilities/vendor/daterangepicker/daterangepicker.css';
import '../utilities/vendor/animsition/css/animsition.min.css';
import '../utilities/vendor/css-hamburgers/hamburgers.min.css';
import '../utilities/vendor/animate/animate.css';
import '../utilities/fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import '../utilities/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import '../utilities/images/icons/favicon.ico';
import '../utilities/jquery-confirm/js/jquery-confirm.js';
import '../utilities/jquery-confirm/css/jquery-confirm.css';
import $ from 'jquery';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            redirectState : false,
        }
        this.doLogOut = this.doLogOut.bind(this);
        //this.doDirection = this.doDirection.bind(this);
    }
    doLogOut (){
        this.setState({redirectState: true});
        localStorage.clear();
        // $.confirm({
        //     title: 'Alert !',
        //     theme: 'supervan',
        //     content: 'Are you sure you want logout ?',
        //     buttons: {
        //         confirm: function () {
        //             localStorage.clear();
        //         },
        //         cancel: function () {
                    
        //         }
        //     }
        // });
    }
    render(){
        if(!localStorage.getItem("userData")){
            return (<Redirect to={'/login'} />);
        }
        if(this.state.redirectState){
            return( <Redirect to='/login' />);
        }
        return (
            <nav class="mb-1 navbar navbar-expand-lg navbar-primary default-color">
                    <Link class="navbar-brand" to={'/home'}>Home</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-333"
                        aria-controls="navbarSupportedContent-333" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent-333">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Employee
                            <span class="sr-only">(current)</span>
                            </a>
                            <div class="dropdown-menu dropdown-success" aria-labelledby="navbarDropdownMenuLink-333">
                                <a class="dropdown-item" href="#">Update Profile</a>
                                <a class="dropdown-item" href="#">Update</a>
                                <a class="dropdown-item" href="#">Delete</a>
                            </div>
                        </li>
                        
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-334" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Payroll</a>
                            <div class="dropdown-menu dropdown-success" aria-labelledby="navbarDropdownMenuLink-334">
                                <Link  to={'/payslip'} class="dropdown-item">PaySlip</Link>
                                <Link  to={'/payslip'} class="dropdown-item">Enhancement Letter</Link>
                                <Link  to={'/payslip'} class="dropdown-item">Form-16</Link>
                            </div>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-335" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">Employee Helpdesk
                            </a>
                            <div class="dropdown-menu dropdown-success" aria-labelledby="navbarDropdownMenuLink-335">
                                <a class="dropdown-item" href="#">IT Tickets</a>
                                <a class="dropdown-item" href="#">Support Guide</a>
                            </div>
                        </li>
                        </ul>
                        <ul class="navbar-nav ml-auto nav-flex-icons">
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light">
                            <i class="fab fa-twitter"></i>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link waves-effect waves-light">
                            <i class="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-user text-success"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
                                <a class="dropdown-item" href="#">Profile</a>
                                <a class="dropdown-item" href="#">Preferences</a>
                                <a class="dropdown-item" onClick={this.doLogOut} >Logout</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Header;