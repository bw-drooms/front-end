import React from 'react';
import './App.css';
import C_Landing from './components/company/C_Landing';
import C_JobForm from './components/company/C_JobForm'

function App() {
  return (
    <div className="App">
      <h1>Droom</h1>
      {/* <C_Landing /> */}
      <C_JobForm />
    </div>
  );
}

export default App;
