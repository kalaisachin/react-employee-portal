import React, {Component} from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Header from '../common-module/header.js';
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
import $ from 'jquery';

class Home extends Component{
    constructor(){
        super();
        this.state={
            redirectState: false
        }
    }
    
    axios = require('axios');
    
    componentDidMount(){
        if(localStorage.getItem("userData")){
            const userName= localStorage.getItem("userName");
            console.log(userName);
            axios.get("http://localhost:8080/finduser/"+userName,{}).then((res)=>{
                this.setState({
                    username : res.data.username,
                    firstName : res.data.firstName,
                    lastName : res.data.lastName,
                    designation :res.data.designation,
                    emailId : res.data.emailId,
                    rating : res.data.rating,
                    experienceLevel : res.data.experienceLevel,
                    totalProjects : res.data.totalProjects,
                    communicationLevel : res.data.communicationLevel,
                    availability : res.data.availability,
                    mobile : res.data.mobile,
                    dob: res.data.userProfile.dob,
                    gender: res.data.userProfile.gender,
                    bloodGroup: res.data.userProfile.bloodGroup,
                    emergencyContact: res.data.userProfile.emergencyContact,
                    alternativeEmail: res.data.userProfile.alternativeEmail,
                    residentialAddress: res.data.userProfile.residentialAddress,
                    permenentAddress: res.data.userProfile.permenentAddress,
                    nationality: res.data.userProfile.nationality,
                    aadharNumber: res.data.userProfile.aadharNumber,
                    passportNumber: res.data.userProfile.passportNumber,
                    passportValidity: res.data.userProfile.passportValidity,
                    drivingLicenceNumber: res.data.userProfile.drivingLicenceNumber,
                    drivingLicenceValidity: res.data.userProfile.drivingLicenceValidity,
                    imageUrl: res.data.userProfile.imageUrl
                });
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
        }
    }
    render(){
        if(!localStorage.getItem("userData")){
            return (<Redirect to={'/login'} />);
        }
        return (
            <div class="">
                <Header />
                <div class='limiter'>
                    <div class="container-login100">
                    <div class="container emp-profile">
                            <form method="post">
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="profile-img">
                                            <img src={this.state.imageUrl ? this.state.imageUrl : 
                                                this.state.gender == 'Male' ? require('../home-module/images/male.png') : 
                                                this.state.gender == 'Female' ? require('../home-module/images/female.png') : ''} 
                                            alt=""/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="profile-head">
                                                <h5>
                                                    {this.state.firstName ? this.state.firstName : '-'} {this.state.lastName ? this.state.lastName :'-'}
                                                </h5>
                                                <h6>
                                                    {this.state.designation ? this.state.designation : '-'}
                                                </h6>
                                                <p class="proile-rating">RANKINGS : <span>{this.state.rating}/10</span></p>
                                            <ul class="nav nav-tabs" id="myTab" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="communication-tab" data-toggle="tab" href="#communication" role="tab" aria-controls="communication" aria-selected="false">Communication</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                    <Link to={'/updateProfile'}><input type="" class="profile-edit-btn" name="btnAddMore" value="Edit Profile"/></Link>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="profile-work">
                                            <p>WORK LINK</p>
                                            <a href="">Website Link</a><br/>
                                            <a href="">Bootsnipp Profile</a><br/>
                                            <a href="">Bootply Profile</a>
                                            <p>SKILLS</p>
                                            <a href="">Web Designer</a><br/>
                                            <a href="">Web Developer</a><br/>
                                            <a href="">Java, React JS</a><br/>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="tab-content profile-tab" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.username ? this.state.username : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>
                                                            {this.state.firstName ? this.state.firstName : '-'}&nbsp;&nbsp;
                                                            {this.state.lastName ? this.state.lastName : '-'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.emailId ? this.state.emailId : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.mobile ? this.state.mobile : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.designation ? this.state.designation : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>DOB</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.dob ? this.state.dob : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Gender</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.gender ? this.state.gender : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Blood Group</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.bloodGroup ? this.state.bloodGroup : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Emergency Contact #</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.emergencyContact ? this.state.emergencyContact : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Aleternative Email Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.alternativeEmail ? this.state.alternativeEmail: '-'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Experience</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>{this.state.experienceLevel}</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Total Projects</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>{this.state.totalProjects}</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Communication Level</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>{this.state.communicationLevel}</p>
                                                            </div>
                                                        </div>
                                                        <div class="row">
                                                            <div class="col-md-6">
                                                                <label>Availability</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <p>{this.state.availability} Hrs per/day</p>
                                                            </div>
                                                        </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <label>Your Bio</label><br/>
                                                        <p>Your detail description</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="communication" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Residential Address</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                    <p>{this.state.residentialAddress ? this.state.residentialAddress : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Permenent Address</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.permenentAddress ? this.state.permenentAddress : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Nationality</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.nationality ? this.state.nationality : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Aadhar Number</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.aadharNumber ? this.state.aadharNumber : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Passport Number</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.passportNumber ? this.state.passportNumber : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Passport Validity</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.passportValidity ? this.state.passportValidity : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Drving Licence Number</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.drivingLicenceNumber ? this.state.drivingLicenceNumber : '-'}</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-6">
                                                        <label>Driving Licence Validity</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <p>{this.state.drivingLicenceValidity ? this.state.drivingLicenceValidity : '-'}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>           
                        </div>
                    </div>
                </div>
            </div>
          );
    }  
    
}

export default Home;