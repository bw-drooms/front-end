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
import SignUpPrivate from './components/routes/SignUpPrivate';

function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <h1>Droom</h1>
        <div className="registration-page">
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/" component={SignupForm} />
        </div>
        <Route path='/SeekerProfile' component={SeekerProfile}/>
        <Switch>
          <LoginPrivate path='/profile' component={CProfile}/>
          <LoginPrivate path='/company-landing' component={CLanding}/>
          <LoginPrivate path='/jobs' component={CJobs}/>
          <LoginPrivate path='/applicants' component={CApplicantList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
