import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Login from './components/Login/login-component';
import EmployeeList from './components/Employee-list/employee-list.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route exact path="/employee-list" component={EmployeeList} />
      </div>
    </Router>
    
  );
}

export default App;
