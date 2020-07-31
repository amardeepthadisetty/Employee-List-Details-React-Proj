import React, { useEffect, useState } from 'react';
import empData from '../../data.json';
import { Link } from 'react-router-dom';

const EmployeeDetails = ({match}) =>  {
    const [employeeDetails, setemployeeDetails] = useState([]);
    useEffect(() => {
        console.log(match.params.empID);

        const filteredEmpList = empData.filter(emp => (emp.emp_id === match.params.empID ));
        setemployeeDetails(filteredEmpList);
        //eslint-disable-next-line
    }, [])
    return (
        <div>
            <Link to="/employee-list" className="btn btn-sm btn-info">Back to Search Page </Link>
            <h1>Employee Details</h1>
            {
                employeeDetails.map(d => {
                    return (
                        <div className="employee-box" key={d.emp_id}>
                            <div className="each-box">
                               Employee ID : {d.emp_id} 

                            </div>
                            <div className="each-box">Employee name : {d.emp_name}</div>
                            <div className="each-box">Employee Address : {d.emp_address}</div>
                            <div className="each-box">Employee Department : {d.emp_department}</div>
                            <div className="each-box">Employee Designation : {d.emp_designation}</div>
                            <div className="each-box">Employee Experience : {d.emp_experience}</div>
                            <div className="each-box">Employee Salary : {d.emp_salary}</div>
                            <div className="each-box">Employee emp_photo_path : <img height="120px" src={d.emp_photo_path} alt={d.emp_photo_path} /></div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}

export default EmployeeDetails;
