import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import CProfile from './components/company/CProfile'
import CLanding from './components/company/CLanding'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components//login/SignupForm';
import CApplicantList from './components/company/CApplicantList';
import SeekerProfile from './components/seeker/SProfile'
import cardStream from './components/seeker/SCardStream'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPrivate from './components/routes/LoginPrivate'
import NavBar from './components/routes/NavBar';
import Logo from './images/Droom-logo-dark.png';

function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <img className="main-logo" src={Logo} alt="Droom Logo Dark"/>
        <div className="registration-page">
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/" component={SignupForm} />
        </div>
        <Route path='/SeekerProfile' component={SeekerProfile}/>
        <Switch>
          <LoginPrivate path='/profile' component={CProfile}/>
          <LoginPrivate path='/company-landing' component={CLanding}/>
          <LoginPrivate path='/jobs' component={CJobs}/>
          <LoginPrivate path='/applicants/:company/:job' component={CApplicantList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
