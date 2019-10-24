import React from 'react';
import './App.css';
import CJobs from './components/company/CJobs'
import CProfile from './components/company/CProfile'
import CLanding from './components/company/CLanding'
import LoginForm from './components/login/LoginForm';
import SignupForm from './components//login/SignupForm';
import CApplicantList from './components/company/CApplicantList';
import LoginPrivate from './components/routes/LoginPrivate'
import NavBar from './components/routes/NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  return (
    <Router >
      <NavBar />
      <div className="App">
        <h1>Droom</h1>
        <Route exact path="/" component={LoginForm} />
        <Route exact path="/" component={SignupForm} />
        <Switch>
          <LoginPrivate path='/company-profiles' component={CProfile}/>
          <LoginPrivate path='/company-landing' component={CLanding}/>
          <LoginPrivate path='/applicants' component={CApplicantList}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
