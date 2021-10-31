import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseContex from '../../Contextapi/UseContext';

const Login = () => {
    const {googlesignin,user}=UseContex();
    const location= useLocation();
    const histry= useHistory();
    if(user.email||user.displayName){
        histry.push(location.state?.from || '/home')
    }
   
    return (
        <div className="container loginbg">
            <div className="row">
            <h3>Please Login Our Site</h3>
            <button onClick={googlesignin} className="btn btn-warning w-25 mx-auto mt-3">Google login</button>
            </div>
        </div>
    );
};

export default Login;