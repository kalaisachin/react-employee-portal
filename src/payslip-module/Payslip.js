import React from 'react';
import {Link, Redirect} from "react-router-dom";
import axios from "axios";
import Picker from 'react-month-picker';
import Header from '../common-module/header.js';
import PDFViewer from 'pdf-viewer-reactjs';
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

import '../payslip-module/payslip.css';
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
//import CaseSummary from './components/CaseSummary.jsx';
import $ from 'jquery';

class Payslip extends React.Component{
    
    constructor(props) {
        super(props);
        this.state={
            selectMonth : ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.doSelectMonth = this.doSelectMonth.bind(this);
      }
      
      loggedIn(){
          this.setState({redirctState: true});  
      }
      doSelectMonth(event) {
        this.setState({
            selectMonth: event.target.value
        });
      }

      handleSubmit(event) {
        // const username= localStorage.getItem("userName");
        // const selectMonth = this.state.selectMonth;
        // axios.get("http://localhost:8080/finduser/"+username,{})
        // .then((res)=>{
        //     if(res !== null && password === res.data[0].password){
        //         localStorage.setItem("userData", res);
        //         localStorage.setItem("userName", res.data[0].username);
        //         this.loggedIn();
        //     }else{
        //         $.alert({
        //             title: 'Error !',
        //             theme: 'supervan',
        //             content: 'Login Faield check your username & password !',
    
        //             buttons: {
        //                 info: {
        //                     btnClass: 'btn-blue',
        //                     text : 'Ok'
        //                 }
        //             }
        //         });
        //     }
        //     }).catch((error)=>{
        //         $.alert({
        //             title: 'Error !',
        //             theme: 'supervan',
        //             content: 'There was a Error in Api call !',
    
        //             buttons: {
        //                 info: {
        //                     btnClass: 'btn-blue',
        //                     text : 'Ok'
        //                 }
        //             }
        //         });
        //     });
    }

    render(){

        // if(this.state.redirctState){
        //     return (<Redirect to={'/home'} />);
        // }
        // if(localStorage.getItem("userData")){
        //     return (<Redirect to={'/home'} />);
        // }
        const styles = StyleSheet.create({
            page: {
              flexDirection: "row"
            },
            section: {
              flexGrow: 1
            }
        });

        const MyDocument = (
            <Document>
              <Page size="A4" style={styles.page}>
                <View style={styles.section}>
                  <Text>Hello World!</Text>
                </View>
                <View style={styles.section}>
                  <Text>We're inside a PDF!</Text>
                </View>
              </Page>
            </Document>
        );

        let pickerLang = {
            months: ['Jan', 'Feb', 'Mar', 'Spr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            , from: 'From', to: 'To'
        }
        , mvalue = {year: 2015, month: 11}
        , mrange = {from: {year: 2014, month: 8}, to: {year: 2015, month: 5}}

        let makeText = m => {
            if (m && m.year && m.month) return (pickerLang.months[m.month-1] + '. ' + m.year)
            return '?'
        }

        return (
                <div>
                <Header />
                <div class='container'>
                    <div class="container-login200">
                        <div class="wrap-login200 p-l-55 p-r-55 p-t-20 p-b-20">
                                <span class="login200-form-title p-b-10">
                                </span>
                                <div class='row'>
                                    <div class="col-md-6">
                                    
                                    </div>
                                    <div class="col-md-6" data-validate="Password is required">
                                    <button type="button" class="login100-form-btn" onClick={this.handleSubmit}> 
                                           Payslip
                                        </button>
                                    </div>
                                </div>
                        </div>
                        <div id="sal_table_id" class="wrap-login200"> 
                        <img className="img-responsive image-logo" src={require("../utilities/images/congruent-Info-tech.png")} alt="logo"/>
                        <table id="sal_table" class="MRGN5PX data-personal-table">
                        <tr id="sal_details" class="">
                            <td>
                                <table class="bordered">
                                <tr>
                                    <td class="p-a-10px border-left border-top data-personal-label">CODE</td>
                                    <td class="p-a-10px border-top">:</td>
                                    <td class="p-a-10px border-top border-right"><div id="employeeid" class="dataLabel"></div></td>
                                    <td class="p-a-10px border-top border-left data-personal-label">BIRTH DATE</td>
                                    <td class="p-a-10px border-top">:</td>
                                    <td class="p-a-10px border-top border-right"><div id="dob" class="dataLabelcontent"></div></td>
                                </tr>
                                <tr>
                                    <td class="p-a-10px border-left data-personal-label">NAME</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="fname" class="dataLabel"></div></td>
                                    <td class="p-a-10px border-left data-personal-label">JOINING DATE</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="jdate" class="dataLabelcontent"></div></td>
                                </tr>
                                <tr>
                                    <td class="p-a-10px border-left data-personal-label">FATHER NAME</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="relationship" class="dataLabel"></div></td>
                                    <td class="p-a-10px border-left data-personal-label">PAN NO</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="pan" class="dataLabelcontent"></div></td>
                                </tr>
                                <tr>
                                    <td class="p-a-10px border-left data-personal-label">DEPARTMENT</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="dept" class="dataLabel"></div></td>
                                    <td class="p-a-10px border-left data-personal-label">AADHAR CARD NO</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="aadharno" class="dataLabelcontent"></div></td>
                                </tr>
                                <tr>
                                    <td class="p-a-10px border-left data-personal-label">DESIGNATION</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="postapplied" class="dataLabel"></div></td>
                                    <td class="p-a-10px border-left data-personal-label">PF NO</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="pfno" class="dataLabelcontent"></div></td>
                                </tr>
                                <tr>
                                    <td class="p-a-10px border-left data-personal-label">BANK NAME</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="bankname" class="dataLabel"></div></td>
                                    <td class="p-a-10px border-left data-personal-label">JOINING LOCATION</td>
                                    <td class="p-a-10px">:</td>
                                    <td class="p-a-10px border-right"><div id="joininglocation" class="dataLabelcontent"></div></td>
                                </tr>
                                <tr>
                                    <td class="p-a-10px border-left border-bottom data-personal-label">ACCOUNT NO</td>
                                    <td class="p-a-10px border-bottom">:</td>
                                    <td class="p-a-10px border-right border-bottom"><div id="accountno" class="dataLabel"></div></td>
                                    <td class="p-a-10px border-left border-bottom data-personal-label">DAYS PAYABLE</td>
                                    <td class="p-a-10px border-bottom">:</td>
                                    <td class="p-a-10px border-right border-bottom"><div id="days" class="dataLabelcontent"></div></td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr id ="sal_details_cal">
                        <td>	
                        <table class="sal_details_cal">	
                            <tr>
                                <td class="p-a-10px border-top border-bottom border-left border-right headingLeftTag">EARNINGS (<span class="rupyaINR WebRupee">&#x20B9;</span>)</td>
                                <td class="p-a-10px border-top border-bottom border-left border-right headingRightTag">DEDUCTION (<span class="rupyaINR WebRupee">&#x20B9;</span>)</td>
                            </tr>
                        </table>
                        <table class="description-amount-table">	
                        <tr>
                            <td class="p-a-10px earning-tab border-left border-top border-right border-bottom">Description</td>
                            <td class="p-a-10px earning-amount-tab  border-left border-top border-right border-bottom">Amount (<span class="rupyaINR WebRupee">&#x20B9;</span>)</td>
                            <td class="p-a-10px deduction-tab  border-left border-top border-right border-bottom">Description</td>
                            <td class="p-a-10px deduction-amount-tab  border-left border-top border-right border-bottom">Amount (<span class="rupyaINR WebRupee">&#x20B9;</span>)</td>
                        </tr>
                        <tr>
                            <td class="p-a-10px border-left">Basic / DA</td>
                            <td class="p-a-10px border-left"><div  id="mbasic"></div></td>
                            <td class="p-a-10px border-left border-right">PF Contribution</td>
                            <td class="p-a-10px border-left border-right"><div id="mpf"></div></td>
                        </tr>
                        <tr>
                            <td class="p-a-10px border-left">HRA</td>
                            <td class="p-a-10px border-left"><div id="mhra"></div></td>
                            <td class="p-a-10px border-left border-right"></td>
                            <td class="p-a-10px border-left border-right"><div id="mpt"></div></td>
                        </tr>
                        <tr>
                            <td class="p-a-10px border-left">Conveyance Allowances</td>
                            <td class="p-a-10px border-left"><div id="mconvay"></div></td>
                            <td class="p-a-10px border-left border-right"></td>
                            <td class="p-a-10px border-left border-right"><div id="tds"></div></td>
                        </tr>
                        <tr>
                            <td class="p-a-10px border-left border-bottom"></td>
                            <td class="p-a-10px border-left border-bottom"><div id="mpersonal"></div></td>
                            <td class="p-a-10px border-left border-bottom  border-right"></td>
                            <td class="p-a-10px border-left border-bottom  border-right"></td>
                        </tr>
                        <tr>
                            <td class="p-a-10px border-left border-bottom">Total Earnings</td>
                            <td class="p-a-10px border-left border-bottom"><div id="totalearnings"></div></td>
                            <td class="p-a-10px border-left border-bottom">Total Deduction</td>
                            <td class="p-a-10px border-left border-bottom border-right"><div id="totaldeduction"></div></td>
                        </tr>
                        <tr>
                            <td class="p-a-10px border-left border-bottom">Net Payable Amount :</td>
                            <td class="p-a-10px border-bottom"><div id="netpayableamount"></div></td>
                            <td class="p-a-10px border-bottom"></td>
                            <td class="p-a-10px border-bottom border-right"><div id=""></div></td>
                        </tr>
                    </table>
                    </td>		
                    </tr>
                    <tr>
                    </tr>	
                    </table>
                    </div>
                    </div>
                </div> 
                </div>
          );
    }  
    
}

export default Payslip;