import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authRegister } from '../../Store/Features/Auth/authActions';


function Register() {

    const [formValues, setFormValues] = useState({});
    const {status, message} = useSelector(shop=>shop.auth);
    console.log(status, message);
    const dispatch = useDispatch();

    const handleChange = (e)=>{
        const {name, value} = e.target;
        console.log(name, value);
        setFormValues(values => ({...values, [name]: value}));
        console.log(formValues);     
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(authRegister(formValues));
        document.getElementById("authRegister").reset();
        setFormValues({});
    }

    return(
        <>
            <form id='authRegister'>
                <p><label>Email</label> <input type="text" onChange={handleChange} value={formValues.email} name="email" /></p> 
                <p><label>username</label> <input type="text" onChange={handleChange} name="username" value={formValues.username} /></p> 
                <p><label>password</label> <input type="password" name="password" onChange={handleChange} value={formValues.password} /> </p>
                <p><label>phone</label> <input type="text" name="phone" onChange={handleChange} value={formValues.phone} /></p>
                <button onClick={(e)=>handleSubmit(e)}>Submit</button>
            </form>
        </>
    )   
}

export default Register;    