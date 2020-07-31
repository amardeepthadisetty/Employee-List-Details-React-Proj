import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Login from './components/Login/login-component';
import EmployeeList from './components/Employee-list/employee-list.component';
import EmployeeDetails from './components/Employee-details/employee-details';

function App() {
  return (
    <Router>
      <div className="container">
        <Route exact path="/" component={Login} />
        <Route exact path="/employee-list" component={EmployeeList} />
        <Route exact path="/employee-details/:empID" component={EmployeeDetails} />
      </div>
    </Router>
    
  );
}

export default App;
