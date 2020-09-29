import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import CProfile from './components/company/CProfile'
import CLanding from './components/company/CLanding'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components//login/SignupForm';
import CApplicantList from './components/company/CApplicantList';
import cardStream from './components/seeker/SCardStream'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPrivate from './components/routes/LoginPrivate'
import NavBar from './components/routes/NavBar';
import LogoSpacer from './components/routes/LogoSpacer';


function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <Route path="/" component={LogoSpacer}/>
        <div className="registration-page">
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/" component={SignupForm} />
        </div>
        <Switch>
         
          <LoginPrivate path='/applicants/:company/:job' component={CApplicantList}/>
        </Switch>
      </div>
      <div className="spacer"/>
    </Router>
  );
}

export default App;
