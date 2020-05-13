import React, {PureComponent} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from '../src/login-module/Login'
import SignUp from '../src/login-module/signUp';
import ForgotPassword from '../src/login-module/forgotPassword';
import Home from '../src/home-module/home';
import PaySlip from './payslip-module/Payslip';
import UpdateProfile from '../src/home-module/updateProfile';

class App extends PureComponent {
  render(){
    
    return (
      <Router>
          <Switch>
			<Route path='/' component={Login} />
            <Route path='/login' component={Login} />
            <Route path='/forgotPassword' component={ForgotPassword} />
            <Route path='/signUp' component={SignUp} />
            <Route path='/home' component={Home} />
            <Route path='/updateProfile' component={UpdateProfile} />
            <Route path='/payslip' component={PaySlip} />
        </Switch>
      </Router> 
    );
  } 
}

export default App;
