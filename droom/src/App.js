import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import CProfile from './components/company/CProfile'
import CLanding from './components/company/CLanding'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components//login/SignupForm';

import SeekerProfile from './components/seeker/SProfile'

import cardStream from './components/seeker/SCardStream'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPrivate from './components/routes/LoginPrivate'
import NavBar from './components/routes/NavBar';


function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <h1>Droom</h1>
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path='/jobs' component={CJobs}/>
        <Route path='/company/:id' Component={CProfile}/>
        <Route path='/company-landing' Component={CLanding}/>
        <Switch>
          <LoginPrivate path='/profile' component={CProfile}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
