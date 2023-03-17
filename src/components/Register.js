import React, { useState } from 'react';

const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://strangers-things.herokuapp.com/api/${cohortName}/users/register`;


const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
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
            }).then(response => response.json())
                .then(result => {
                    console.log(result);
                })
                .catch(console.error);
        

    }
    return (
      <div>
          <h1 >Register User</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />Username
                <input type="text" value={password} onChange={(event) => setPassword(event.target.value)} />Password
                <button>Submit</button>
            </form>
        </div>
    )


}

export default Register;