import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components//login/SignupForm';

import SeekerProfile from './components/seeker/SProfile'

import cardStream from './components/seeker/SCardStream'
import CProfile from './components/company/CProfile'
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
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path='/jobs' component={CJobs}/>
        <Route path='/SeekerProfile' component={SeekerProfile}/>
        <Switch>
          <LoginPrivate path='/profile' component={CProfile}/>
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
