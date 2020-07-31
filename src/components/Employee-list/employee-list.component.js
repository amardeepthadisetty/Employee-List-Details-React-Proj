import React from 'react';
import { data } from 'jquery';

import empData from '../../data.json';

const EmployeeList = () => {
    return (
        <div>
            <h1>Employee list</h1>
            {
                empData.map(d => {
                    return (
                        <div className="employee-box">
                            <div className="each-box">Employee ID : {d.emp_id}</div>
                            <div className="each-box">Employee name : {d.emp_name}</div>
                            <div className="each-box">Employee Address : {d.emp_address}</div>
                            <div className="each-box">Employee Department : {d.emp_department}</div>
                            <div className="each-box">Employee Designation : {d.emp_designation}</div>
                            <div className="each-box">Employee Experience : {d.emp_experience}</div>
                            <div className="each-box">Employee Salary : {d.emp_salary}</div>
                            <div className="each-box">Employee emp_photo_path : {d.emp_photo_path}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default EmployeeList;
