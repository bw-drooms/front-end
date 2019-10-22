import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import cardStream from './components/seeker/SCardStream'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router >
      <div className="App">
        <h1>Droom</h1>
        <Route path="/login" component={LoginForm}/>
        <Route path="/signup" component={SignupForm}/>
        <Route path="/cardStream" component={cardStream}/>
      </div>
    </Router>
  );
}

export default App;
