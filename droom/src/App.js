import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/login/SignupForm';
import CProfile from './components/company/CProfile'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <h1>Droom</h1>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="/profile" component={CProfile}/>
        <Route path="/jobs" component={CJobs}/>
      </div>
    </Router>
  );
}

export default App;
