import React, { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Login = (props) => {
    const [ LoginUsername, setLoginUsername ] = useState('');
    const [ LoginPassword, setLoginPassword ] = useState('');
    const [ longinErrorMessage, setLoginErrorMessage ] = useState('');

    const accountLogin = () => {
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/login', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: 'superman27',
                    password: 'krypt0n0rbust'
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                result.success ? props.setIsLoggedIn(true) : props.setIsLoggedIn(false);
                result.success ? setLoginErrorMessage('') : setLoginErrorMessage('The username and password do not match, please try again.');
                props.setUserToken(result.data.token);
            })
            .catch(console.error);

    }

    useEffect(() => {}, [LoginUsername, LoginPassword])

    const handleLoginUsername = (event) => {
        setLoginUsername(event.target.value);
    }

    const handleLoginPassword = (event) => {
        setLoginPassword(event.target.value);
    }

    return (
        <div id='Login' className='container'>
            <form>
                <h1>Login</h1>
                <div id='login-inputs' className="form-group">
                    <input
                        type="username"
                        className="form-control"
                        placeholder="Username"
                        onChange={handleLoginUsername}>
                    </input>
                </div>
                <div id='login-inputs' className="form-group">
                    <input
                        type="password"
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                        onChange={handleLoginPassword}>
                    </input>
                </div>

                {props.IsLoggedIn ? <Navigate to='/posts' /> : <div id='login-failed' className='text-danger'>{longinErrorMessage}</div>}

                <button onClick={() => {
                    accountLogin();
                }} type="submit"
                    id='login-buttons'
                    className="btn btn-primary">Login</button>

                <Link to='/register'>
                    <button
                        type="submit"
                        id='login-buttons'
                        className="btn btn-primary">Register</button></Link>
            </form>
        </div>
    )
}

export default Login;