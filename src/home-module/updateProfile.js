import React, {Component} from 'react';
import {Redirect, Link} from "react-router-dom";
import axios from "axios";
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
import '../utilities/jquery-confirm/js/jquery-confirm.js';
import '../utilities/jquery-confirm/css/jquery-confirm.css';
import $ from 'jquery';


class UpdateProfile extends Component{
    constructor(){
        super();
        this.state={
            _id : '',
            username : '',
            firstName : '',
            lastName : '',
            password : '', 
            designation :'',
            emailId : '',
            rating : '',
            experienceLevel : '',
            totalProjects : '',
            communicationLevel : '',
            availability : '',
            mobile : '',
            dob: '',
            gender: '',
            bloodGroup: '',
            emergencyContact: '',
            alternativeEmail: '',
            residentialAddress: '',
            permenentAddress: '',
            nationality: '',
            aadharNumber: '',
            passportNumber: '',
            passportValidity: '',
            drivingLicenceNumber: '',
            drivingLicenceValidity: '',
            imageUrl: '',
            redirectState: false
        }
        this.onChange = this.onChange.bind(this);
        this.doUpdateProfile = this.doUpdateProfile.bind(this);
        this.doRedirect = this.doRedirect.bind(this);
    }
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    axios = require('axios');
    componentDidMount(){
        if(localStorage.getItem("userData")){
            const userName= localStorage.getItem("userName");
            console.log(userName);
            axios.get("http://citemployeeportal-env.eba-hh2rtxck.us-east-2.elasticbeanstalk.com/finduser/"+userName,{}).then((res)=>{
                this.setState({
                        _id :  res.data._id,
                        username : res.data.username,
                        firstName : res.data.firstName,
                        lastName : res.data.lastName,
                        password : res.data.password,
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
    }
    doRedirect = ()=> {
        this.setState({redirectState: true});
    }
    doUpdateProfile(){
        const _id = this.state._id;
        const username = this.state.username;
        const email = this.state.emailId;
        const password = this.state.password;
        const firstname = this.state.firstName;
        const lastname = this.state.lastName;
        const mobilenumber = this.state.mobile;
        const designation = this.state.designation;
        const selfrating = this.state.rating;
        const totalprojects = this.state.totalProjects;
        const experiencelevel = this.state.experienceLevel;
        const communicationlevel = this.state.communicationLevel;
        const availability = this.state.availability;

        var inputs = {
            _id : _id,
            username : username,
            emailId : email,
            password : password,
            firstName : firstname,
            lastName : lastname,
            mobile : mobilenumber,
            designation : designation,
            rating : selfrating,
            totalProjects : totalprojects,
            experienceLevel : experiencelevel,
            communicationLevel : communicationlevel,
            availability : availability,
            userProfile : {
                dob : this.state.dob,
                gender : this.state.gender,
                bloodGroup : this.state.bloodGroup,
                emergencyContact : this.state.emergencyContact,
                alternativeEmail : this.state.alternativeEmail,
                residentialAddress : this.state.residentialAddress,
                permenentAddress : this.state.permenentAddress,
                nationality : this.state.nationality,
                aadharNumber : this.state.aadharNumber,
                passportNumber : this.state.passportNumber,
                passportValidity : this.state.passportValidity,
                drivingLicenceNumber : this.state.drivingLicenceNumber,
                drivingLicenceValidity : this.state.drivingLicenceValidity,
                imageUrl : this.state.imageUrl
            },
        }
        console.log(inputs);
        axios({
            method: 'post',
            url: 'http://citemployeeportal-env.eba-hh2rtxck.us-east-2.elasticbeanstalk.com/update/',
            data: inputs
        })
        .then((res)=>{
            $.alert({
                title: 'Success!',
                theme: 'supervan',
                content: 'Employee Updated Successfully ... !',
                buttons: {
                    info: {
                        btnClass: 'btn-blue',
                        text : 'Ok'
                    }
                }
            });
            this.doRedirect();
            }).catch((error)=>{
                $.alert({
                    title: 'Error !',
                    theme: 'supervan',
                    content: 'There is an error in API Call ... !',
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
        if(!localStorage.getItem("userData")){
            return (<Redirect to={'/login'} />);
        }
        if(this.state.redirectState){
            return (<Redirect to={'/home'} />);
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
                                                    {this.state.firstName} {this.state.lastName}
                                                </h5>
                                                <h6>
                                                    {this.state.designation}
                                                </h6>
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
                                                <li class="nav-item">
                                                    <a class="nav-link" id="security-tab" data-toggle="tab" href="#security" role="tab" aria-controls="security" aria-selected="false">Security</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                    <input type="" class="profile-edit-btn" name="updateProfile"  value="Update Profile" onClick={this.doUpdateProfile}/>
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
                                        <div class="tab-content profile-tab form-group" id="myTabContent">
                                            <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>First Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control" onChange={this.onChange} name="firstName" value={this.state.firstName}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Last Name</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                    <input type="text" class="form-control" onChange={this.onChange} name="lastName" value={this.state.lastName}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Email</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control" onChange={this.onChange} name="emailId" value={this.state.emailId}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Phone</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="number" class="form-control" onChange={this.onChange} maxLength={10} name="mobile" value={this.state.mobile}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Profession</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                    <input type="text" class="form-control" onChange={this.onChange} name="designation" value={this.state.designation}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>DOB</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="date" class="form-control" onChange={this.onChange} name="dob" value={this.state.dob}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Gender</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <select class="form-control" name="gender" onChange={this.onChange} value={this.state.gender} id="gender">
                                                            <option value=''>Select</option>
                                                            <option value='Male'>Male</option>
                                                            <option value='Female'>Female</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Blood Group</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control" onChange={this.onChange} name="bloodGroup" value={this.state.bloodGroup}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Emergency Contact #</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="number" class="form-control" onChange={this.onChange} maxLength={10} name="emergencyContact" value={this.state.emergencyContact}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Aleternative Email Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="email" class="form-control" onChange={this.onChange} name="alternativeEmail" value={this.state.alternativeEmail}/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                                        <div class="row MRGN-8PX">
                                                            <div class="col-md-6">
                                                                <label>Experience</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <select class="form-control" name="experienceLevel" onChange={this.onChange} value={this.state.experienceLevel} id="experienceLevel">
                                                                    <option value=''>Experience Level</option>
                                                                    <option value='Expert'>Expert</option>
                                                                    <option value='Good'>Good</option>
                                                                    <option value='Medium'>Medium</option>
                                                                    <option value='Low'>Low</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="row MRGN-8PX">
                                                            <div class="col-md-6">
                                                                <label>Communication Level</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <select class="form-control" name="communicationLevel" onChange={this.onChange} value={this.state.communicationLevel} id="communicationLevel">
                                                                    <option value=''>Communication Level</option>
                                                                    <option value='Expert'>Expert</option>
                                                                    <option value='Good'>Good</option>
                                                                    <option value='Medium'>Medium</option>
                                                                    <option value='Low'>Low</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="row MRGN-8PX">
                                                            <div class="col-md-6">
                                                                <label>self Rating</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <input class="form-control" onChange={this.onChange} type="number" step="0.5" name="rating" min={0} max={10} onChange={this.onChange} value={this.state.rating} placeholder="Self Rating" />
                                                            </div>
                                                        </div>
                                                        <div class="row MRGN-8PX">
                                                            <div class="col-md-6">
                                                                <label>Total Projects</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <input class="form-control" onChange={this.onChange} type="number" step="1" name="totalProjects" min={0} max={50} onChange={this.onChange} value={this.state.totalProjects} placeholder="Total Projects" />
                                                            </div>
                                                        </div>
                                                        <div class="row MRGN-8PX">
                                                            <div class="col-md-6">
                                                                <label>Availability</label>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <input class="form-control" onChange={this.onChange} type="number" step="0.5" name="availability" min={0} max={12} onChange={this.onChange} value={this.state.availability} placeholder="Time Availability" />
                                                            </div>
                                                        </div>
                                                    <div class="row MRGN-8PX">
                                                        <div class="col-md-12">
                                                            <label>Your Bio</label><br/>
                                                            <p>Your detail description</p>
                                                        </div>
                                                    </div>
                                            </div>
                                            <div class="tab-pane fade" id="communication" role="tabpanel" aria-labelledby="home-tab">
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Residential Address</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <textarea class="form-control" onChange={this.onChange} rows="4" value={this.state.residentialAddress} name="residentialAddress" id="residentialAddress"></textarea>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Permenent Address</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                    <textarea class="form-control" onChange={this.onChange} rows="4" value={this.state.permenentAddress} name="permenentAddress" id="permenentAddress"></textarea>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Nationality</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                    <input class="form-control" type="text"  onChange={this.onChange} name="nationality" value={this.state.nationality} placeholder="Nationality" />
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Aadhar Number</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="number" class="form-control" onChange={this.onChange} maxLength={12} name="aadharNumber" value={this.state.aadharNumber}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Passport Number</label>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <input class="form-control" onChange={this.onChange} type="text" name="passportNumber" value={this.state.passportNumber} placeholder="Passport Number" />
                                                    </div>
                                                    <div class="col-md-3">
                                                        <input class="form-control" onChange={this.onChange} type="date" name="passportValidity" value={this.state.passportValidity} placeholder="Passport Valid Upto" />
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Driving Licenece</label>
                                                    </div>
                                                    <div class="col-md-3">
                                                        <input class="form-control" onChange={this.onChange} type="text" name="drivingLicenceNumber" value={this.state.drivingLicenceNumber} placeholder="DL Number" />
                                                    </div>
                                                    <div class="col-md-3">
                                                        <input class="form-control" onChange={this.onChange} type="date" name="drivingLicenceValidity" value={this.state.drivingLicenceValidity} placeholder="DL Valid Upto" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="tab-pane fade" id="security" role="tabpanel" aria-labelledby="profile-tab">
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>User Id</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control" onChange={this.onChange} name="username" value={this.state.username} disabled/>
                                                        <input type="hidden" class="form-control" onChange={this.onChange} name="_id" value={this.state._id}/>
                                                    </div>
                                                </div>
                                                <div class="row MRGN-8PX">
                                                    <div class="col-md-6">
                                                        <label>Pasword</label>
                                                    </div>
                                                    <div class="col-md-6">
                                                        <input type="text" class="form-control" onChange={this.onChange} name="password" value={this.state.password}/>
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

export default UpdateProfile;