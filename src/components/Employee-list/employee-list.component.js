import React, { useEffect, useState, Fragment } from 'react';
import empData from '../../data.json';

const EmployeeList = () => {
    const [departments, setDepartments] = useState([]);
    const [employeeList, setemployeeList] = useState([]);
    const [filterSelectedDeparment, setfilterSelectedDeparment] = useState('');
    useEffect(() => {
        const departMentsData =empData.reduce(
            (accumulator, current) => accumulator.some(x => x.emp_department === current.emp_department) ? accumulator : [...accumulator, current], []
        )
        //let departMentsData = empData.filter(function (v, i) { return empData.indexOf(v) == i; });
        //console.log(" dp object", departMentsData);
        setDepartments(departMentsData);

        setemployeeList(empData);
    }, [])

    const onChangeHandler = (e) => {
        setfilterSelectedDeparment(e.target.value);
         if (e.target.value!=='') {
             const filteredEmpList = empData.filter(emp => (emp.emp_department === e.target.value));

             setemployeeList(filteredEmpList);
         }else{
             setemployeeList(empData);
             console.log("else part employee list", employeeList);
         }
        

    }
    return (
        <div>
            <div >
                <h1>Department</h1>
                <div>
                    <select onChange={onChangeHandler} className="form-control" name="department" value={filterSelectedDeparment}>
                        <option value="">Select department</option>
                        {
                            departments.map( (dp, index) => {
                                return (
                                    <Fragment key={index}  >
                                        <option  value={dp.emp_department}>{dp.emp_department}</option>    
                                    </Fragment>
                                )
                            })
                        }
                        
                    </select>
                </div>
            </div>

            <div className="employee-list-data">
                <h1>Employee list</h1>
                {
                    employeeList.map(d => {
                        return (
                            <div className="employee-box" key={d.emp_id}>
                                <div className="each-box">Employee ID : {d.emp_id}</div>
                                <div className="each-box">Employee name : {d.emp_name}</div>
                                <div className="each-box">Employee Address : {d.emp_address}</div>
                                <div className="each-box">Employee Department : {d.emp_department}</div>
                                <div className="each-box">Employee Designation : {d.emp_designation}</div>
                                <div className="each-box">Employee Experience : {d.emp_experience}</div>
                                <div className="each-box">Employee Salary : {d.emp_salary}</div>
                                <div className="each-box">Employee emp_photo_path : <img src={`http:localhost:3000`+d.emp_photo_path} alt={d.emp_photo_path} /></div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default EmployeeList;
