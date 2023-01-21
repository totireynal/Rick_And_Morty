import React from "react";
import {  useState } from "react";
import { validation } from './Validation'
import './Form.module.css'

const Form = () => {

const [userData, setUserData] = useState({
    username:'',
    password: ''
});

const [errors, setErrors] = useState({
    username: '',
    password: ''
});

const handleInputChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })
    setErrors(
        validation({
        ...userData,
        [event.target.name] : event.target.value
        }
        )
    )
}

    return (
        <form>
            <label htmlFor="username">Username:</label>
            <input className={errors.username && 'warning'} name='username' value={userData.username}  type='text' onChange={handleInputChange}/>
            {errors.username && <p className='danger'>{errors.username}</p>}
            <br/>
            <label htmlFor="password ">Password:</label>
            <input className={errors.password && 'warning'}name='password' value = {userData.password} type='password' onChange={handleInputChange}/>
            {errors.password && <p>{errors.password}</p>}
            <br/>
            <button>Login</button>

        </form>
    )
}


export default Form;