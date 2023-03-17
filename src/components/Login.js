import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/users/login`


const Login = ({ loggedIn, setLoggedIn, setAuthor }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(APIURL, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      })
    })
      .then(response => 
        response.json()
      )
      .then(result => {
        if(result.success){
          window.localStorage.setItem('loginStatus', result.data.token)
          setLoggedIn(true);
          setAuthor(username);
          navigate('/')
        }

      })
      .catch('ERROR', console.error);
  }

  return (
    <div>
      <h1>
        Login User
      </h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />Username
        <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />Password
        <button>Submit</button>
      </form>
      <Link to='/register'>Not Registered?</Link>

    </div>

  )
}

export default Login