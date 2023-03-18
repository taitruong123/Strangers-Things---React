import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Register = (props) => {
    const [ RegisterUsername, setRegisterUsername ] = useState('');
    const [ RegisterPassword, setRegisterPassword ] = useState('');
    const [ ConfirmRegisterPassword, setConfirmRegisterPassword ] = useState('');
    const [ RegisterPasswordsMatch, setRegisterPasswordMatch ] = useState(false);
    const [ AllFieldsComplete, setAllFieldsComplete ] = useState(true);
    const [ RegisterErrorMessage, setRegisterErrorMessage ] = useState('');

    const accountCreate = async () => {
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/register', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: RegisterUsername,
                    password: RegisterPassword
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                result.success ? props.setIsLoggedIn(true) : props.setIsLoggedIn(false);
                result.success ? setRegisterErrorMessage('') : setRegisterErrorMessage('This username is already exist.');
                props.setUserToken(result.data.token);
            })
            .catch(console.error)
    }

    useEffect(() => {
        if (RegisterPassword === ConfirmRegisterPassword) {
            setRegisterPasswordMatch(true); 
        } else {
            setRegisterPasswordMatch(false);
        }

        if (RegisterUsername.length > 0 && (RegisterUsername === '' || RegisterPassword === '')) {
            setAllFieldsComplete(false);
        } else {
            setAllFieldsComplete(true);
        }

    }, [RegisterUsername, RegisterPassword, ConfirmRegisterPassword])

    const handleRegisterUsername = (event) => {
        setRegisterUsername(event.target.value);
    }

    const handleRegisterPassword = (event) => {
        setRegisterPassword(event.target.value);
    }

    const handleConfirmRegisterPassword = (event) => {
        setConfirmRegisterPassword(event.target.value);
    }

    return (
        <div id='Login' className='container'>
            <form>
                <h1>Register</h1>
                <div id='login-inputs' className="form-group">
                    <input 
                    type="username" 
                    className="form-control" 
                    placeholder="Username"
                    onChange={handleRegisterUsername}></input>
                </div>
                <div id='login-inputs' className="form-group">
                    <input 
                    type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Password"
                    onChange={handleRegisterPassword}></input>
                </div>
                <div id='login-inputs' className="form-group">
                    <input type="password" 
                    className="form-control" 
                    id="exampleInputPassword1" 
                    placeholder="Confirm Password"
                    onChange={handleConfirmRegisterPassword}></input>
                </div>

                {props.IsLoggedIn ? <Navigate to='/posts' /> : <div id='login-failed' className='text-danger'>{RegisterErrorMessage}</div>}

                {RegisterPasswordsMatch ? null : <div id='login-failed' className='text-danger'>The entered passwords do not match.</div>}

                {AllFieldsComplete ? null : <div id='login-failed' className='text-danger'>All fields must be completed.</div>}

                {RegisterPasswordsMatch && AllFieldsComplete ? 
                <button onClick={() => {
                    accountCreation();
                }} type="submit" id='login-buttons' className="btn btn-primary">Register</button> : 
                <button type="submit" id='login-buttons' className="btn btn-primary">Register</button>}

                <div>
                    <small className="form-text text-muted">Already have an account? <Link to='/login'>Click Here.</Link></small>
                </div>
            </form>
        </div>
    )

}

export default Register;