import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router >
      <div className="App">
        <h1>Droom</h1>
        <Route path="/login" component={LoginForm}/>
      </div>
    </Router>
  );
}

export default App;
