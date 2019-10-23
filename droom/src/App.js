import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components//login/SignupForm';
import cardStream from './components/seeker/SCardStream'
import CProfile from './components/company/CProfile'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SeekerProfile from './components/seeker/seekerProfile'

function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <h1>Droom</h1>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="/cardStream" component={cardStream}/>
        <Route path="/profile" component={CProfile}/>
        <Route path="/jobs" component={CJobs}/>
        <Route path="/profile" component={SeekerProfile}/>
      </div>
    </Router>
  );
}

export default App;
