import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const LogIn = (props) => {
    const navigate = useNavigate(); 
    
    const logInOrRegister = async(event) =>{ 
      const logInOrRegisterEndPoint = event.target.childNodes[2].id === 'login' ? 'login' 
      : 'register'
      
     const response = await fetch(`https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/users/${logInOrRegisterEndPoint}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify ({
          user: {
            username: props.usernameInput,
            password: props.passwordInput
          }
        })        
      })
      const info = await response.json()
      props.setToken(info.data.token)
      props.setIsLoggedIn(true)
      navigate("/")
    }

    return(
      <div>
        <h1>Log In</h1>
        <form onSubmit={logInOrRegister}>
          <input class='post-form' placeholder='Username' onChange={(event) => props.setUsernameInput(event.target.value)}></input>
          <input class='post-form' placeholder='Password' onChange={(event) => props.setPasswordInput(event.target.value)}></input>
          {
            props.displayLogInButton ? 
            <>
              <button class='post-form' id="login">Log In</button>
              <button class='post-form' type="button" onClick={() => props.setDisplayLogInButton(false)} >Register Here</button>
        
            </> : 
            <>
              
              <button class='post-form' id='register'>Register</button>
              <button class='post-form' type="button" onClick={() => props.setDisplayLogInButton(true)}>Return to Log In</button>
            </>
          }
        </form>
      </div>
    )
}



export default LogIn