import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onSubmitHandler = (e) => {
        e.preventDefault();
        if(email==='' || password===''){
            alert("Email and password are mandatory");
        }else if(email==="test" && password==="test"){
            history.push('employee-list');
        }else{
            alert("Please provide valid email and password");
        }
    }

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
        console.log("email is: ", email);

    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        console.log("p is: ", password);

    }

    return (
        <div className="login-screen col-sm-6">
            <form onSubmit={onSubmitHandler}>
                
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input type="text" name="email" value={email} onChange={onChangeEmail} className="form-control" placeholder="Enter email" id="email" />
                </div>

                

                <div className="form-group">
                    <label htmlFor="email">Password</label>
                    <input type="password" name="password" value={password} onChange={onChangePassword} className="form-control" placeholder="Enter password" id="password" />
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login
