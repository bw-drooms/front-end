import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components/login/SignupForm';
import cardStream from './components/seeker/SCardStream'
import CProfile from './components/company/CProfile'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <h1>Droom</h1>
        <Route exact path="/" component={LoginForm}/>
        <Route exact path="/" component={SignupForm}/>
        <Route path="/cardStream" component={cardStream}/>
        <Route path="/profile" component={CProfile}/>
        <Route path="/jobs" component={CJobs}/>
      </div>
    </Router>
  );
}

export default App;
