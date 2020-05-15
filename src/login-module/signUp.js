import React, {Component} from 'react';
import {Link, Redirect} from "react-router-dom";
import ReactTooltip from 'react-tooltip'
import 'font-awesome/css/font-awesome.min.css';
import axios from "axios";
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
//import '../common-module/jspdf.min.js';


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            confirmpassword: '',
            firstname: '',
            lastname: '',
            mobilenumber: '',
            designation: '',
            gender: '',
            selfrating: '',
            totalprojects: '',
            experiencelevel: '',
            communicationlevel: '',
            timeavailability: '',
            usernameError: '',
            emailError: '',
            passwordError: '',
            confirmpasswordError: '',
            firstnameError: '',
            lastnameError: '',
            mobilenumberError: '',
            designationError: '',
            selfratingError: '',
            totalprojectsError: '',
            experiencelevelError: '',
            communicationlevelError: '',
            timeavailabilityError: '',
            usernameAvailabilityCheck: '',
            redirectState : false
        }
        this.onChange = this.onChange.bind(this);
        this.doSignUp = this.doSignUp.bind(this);
        this.doRedirect = this.doRedirect.bind(this);
        this.checkUsernameAvailability = this.checkUsernameAvailability.bind(this);
    }
    doRedirect = () =>{
        this.setState({redirectState : true});
    }
    doSignUp(){
        const username = this.state.username;
        const email = this.state.email;
        const password = this.state.password;
        const confirmpassword = this.state.confirmpassword;
        const firstname = this.state.firstname;
        const lastname = this.state.lastname;
        const mobilenumber = this.state.mobilenumber;
        const designation = this.state.designation;
        const selfrating = this.state.selfrating;
        const totalprojects = this.state.totalprojects;
        const experiencelevel = this.state.experiencelevel;
        const communicationlevel = this.state.communicationlevel;
        const timeavailability = this.state.timeavailability;
        const gender = this.state.gender;

        var inputs = {
            username : username,
            emailId : email,
            password : password,
            confirmpassword : confirmpassword,
            firstName : firstname,
            lastName : lastname,
            mobile : mobilenumber,
            designation : designation,
            rating : selfrating,
            totalProjects : totalprojects,
            experienceLevel : experiencelevel,
            communicationLevel : communicationlevel,
            availability : timeavailability,
            userProfile : {
                gender: gender
            },
            
        }

        //var inputParams = JSON.stringify(inputs);
        //var baseURL = "http://localhost:8080/create/"+inputParams;
        //console.log(baseURL);
        axios({
            method: 'post',
            url: 'http://citemployeeportal-env.eba-hh2rtxck.us-east-2.elasticbeanstalk.com/create/',
            data: inputs
        })
        .then((res)=>{
            $.alert({
                title: 'Success!',
                content: 'Signed Up Successfully Please Login ... !',
                theme: 'supervan',
                buttons: {
                    info: {
                        btnClass: 'btn-blue',
                        text: 'Ok'
                    }
                }
            });
            this.doRedirect();
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
    onChange(e){
        this.setState({[e.target.name] : e.target.value});
    }
    checkUsernameAvailability = (e) => {
        this.setState({[e.target.name] : e.target.value});
        let username = $('#username').val();
        console.log('gettting in '+username.length);
        $('#username').removeClass('inp-loading-icon');
        $('#username').removeClass('inp-available-icon');
        $('#username').removeClass('inp-notavailable-icon');
        if(username.length >= 3){
            $('#username').addClass('inp-loading-icon');
            axios.get("http://citemployeeportal-env.eba-hh2rtxck.us-east-2.elasticbeanstalk.com/checkUserAvailability/"+username,{})
                .then((res)=>{
                    console.log("length : "+ res.data);
                    if(res.data == 0){
                        $('#username').removeClass('inp-loading-icon');
                        $('#username').removeClass('inp-notavailable-icon');
                        $('#username').addClass('inp-available-icon');
                    }else{
                        $('#username').removeClass('inp-loading-icon');
                        $('#username').removeClass('inp-available-icon');
                        $('#username').addClass('inp-notavailable-icon');
                    }
                }).catch((error)=>{
                        
                });
        }else{
            console.log("getting in ... ");
            $('#username').removeClass('inp-loading-icon');
            $('#username').removeClass('inp-available-icon');
            $('#username').removeClass('inp-notavailable-icon');
        }
        
    }
    render(){
        if(this.state.redirectState){
            return (<Redirect to={'/login'} />);
        }
        return (
                <div className='limiter'>
                    <div className="container-login100">
                        <div className="wrap-login200 p-l-55 p-r-55 p-t-65 p-b-50">
                                <span className="login100-form-title p-b-33">
                                    Account SignUp
                                </span>
                                <div className="row">
                                    <div className="col-md-6 wrap-input100 validate-input" data-validate = "Enter valid Username">
                                        <input className={'input100'} id="username" type="text" name="username" onChange={this.checkUsernameAvailability} placeholder="Username" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                    <div className="col-md-6 wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
                                        <input className="input100" type="text" name="email" onChange={this.onChange} placeholder="Email" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 wrap-input100 rs1 validate-input" data-validate="Password is required">
                                        <input className="input100" type="password" name="password" onChange={this.onChange} placeholder="Password" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                    <div className="col-md-6 wrap-input100 rs1 validate-input" data-validate="Confirm Password is required">
                                        <input className="input100" type="password" name="confirmpassword" onChange={this.onChange} placeholder="Confirm Password" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-md-6 wrap-input100 rs1 validate-input" data-validate="Firstname is required">
                                        <input className="input100" type="text" name="firstname" onChange={this.onChange} placeholder="Firstname" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                    <div className=" col-md-6 wrap-input100 rs1 validate-input" data-validate="Lastname is required">
                                        <input className="input100" type="text" name="lastname" onChange={this.onChange} placeholder="Lastname" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className=" col-md-6 wrap-input100 rs1 validate-input" data-validate="Mobile Number is required">
                                        <input className="input100" type="text" name="mobilenumber" onChange={this.onChange} placeholder="Mobile Number" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                    <div className=" col-md-6 wrap-input100 rs1 validate-input" data-validate="Designation is required">
                                        <input className="input100" type="text" name="designation" onChange={this.onChange} placeholder="Designation" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 wrap-input100 rs1 validate-input" data-validate="Self Rating is required">
                                    <input className="input100" type="number" step="0.5" name="selfrating" min={0} max={10} onChange={this.onChange} placeholder="Self Rating" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                    <div className="col-md-6 wrap-input100 rs1 validate-input select-input100" data-validate="Gender is required">
                                            <select className="form-control input100 selectbox" name="gender" onChange={this.onChange} id="gender">
                                                <option value=''>Gender</option>
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                                <option value='Others'>Others</option>
                                            </select>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 wrap-input100 rs1 validate-input select-input100" data-validate="Experience Level is required">
                                            <select className="form-control input100 selectbox" name="experiencelevel" onChange={this.onChange} id="experiencelevel">
                                                <option value=''>Experience Level</option>
                                                <option value='Expert'>Expert</option>
                                                <option value='Good'>Good</option>
                                                <option value='Medium'>Medium</option>
                                                <option value='Low'>Low</option>
                                            </select>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                    <div className="col-md-6 wrap-input100 rs1 validate-input select-input100" data-validate="Communication Level is required">
                                            <select className="form-control input100 selectbox" name="communicationlevel" onChange={this.onChange} id="communicationlevel">
                                                <option value=''>Communication Level</option>
                                                <option value='Expert'>Expert</option>
                                                <option value='Good'>Good</option>
                                                <option value='Medium'>Medium</option>
                                                <option value='Low'>Low</option>
                                            </select>
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 wrap-input100 rs1 validate-input" data-validate="Total Projects is required">
                                        <input className="input100" type="number" step="1" name="totalprojects" min={0} max={50} onChange={this.onChange} placeholder="Total Projects" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                    <div className="col-md-6 wrap-input100 rs1 validate-input" data-validate="Time Availability Per/Day is required">
                                        <input className="input100" name="timeavailability" type="number" step="0.5" min={0} max={12} onChange={this.onChange} placeholder="Time Availability Per/Day" />
                                        <span className="focus-input100-1"></span>
                                        <span className="focus-input100-2"></span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-4'></div>
                                    <div className="container-login100-form-btn m-t-20 col-md-4">
                                        <button className="login100-form-btn" onClick={this.doSignUp}>
                                            Sign in
                                        </button>
                                    </div>
                                    <div className='col-md-4'></div>
                                </div>
                                <div className="text-center p-t-45 p-b-4">
                                    <span className="txt1">
                                        Forgot
                                    </span>&nbsp;

                                    <Link to="/forgotPassword" className="txt2 hov1">
                                        Password
                                    </Link>
                                </div>

                                <div className="text-center">
                                    <span className="txt1">
                                        Already User?
                                    </span>

                                    <Link to="/login" className="txt2 hov1">
                                        Login
                                    </Link>
                                </div>
                        </div>
                    </div>
                </div>
          );
    }  
    
}

export default SignUp;