import React, { useState } from 'react';
import { redirect } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../../Store/Features/Auth/authActions';

function Login() {

    const [formValues, setFormValues] = useState({});
    const dispatch = useDispatch();
    const {status, user, message} = useSelector(shop=>shop.auth);
    console.log(status, user, message);
    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name, value);
        setFormValues(values => ({...values, [name]: value}));
        console.log(formValues);     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
        dispatch(authLogin(formValues));
        if(status === 'idle') {
            redirect("/");
        }
    }

    return(
        <>
            <form id="login-form"> 
                <input type="text" onChange={handleChange} name="email" />
                <input type="password" name="password" onChange={handleChange} />
                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </>
    )   
}

export default Login;    