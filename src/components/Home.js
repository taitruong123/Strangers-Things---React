import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Home = () => {
    const [displayHomeInfo, setDisplayHomeInfo] = useState(true)
    return(
        <form>
        {
            displayHomeInfo ?
            <>
            <p>Not a member?</p>
            <Link to='/makeAccount'>
             <button onClick={() => setDisplayHomeInfo(false)}>Join now</button>
            </Link>
            <p>Have an account</p>
            <Link to='/signIn'>
             <button onClick={() => setDisplayHomeInfo(false)}>Log in</button>
            </Link> 
            </> :
            null
        }
    </form>
    )
}

export default Home;