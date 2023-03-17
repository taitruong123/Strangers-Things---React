import React from 'react';
import {Link} from 'react-router-dom'


const Header = ({loggedIn,setAuthor, setLoggedIn, }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        window.localStorage.clear()
        setLoggedIn(false);
        setAuthor('');
    }

    return(
        <div>
            {!loggedIn ? <Link to='/login'>Login</Link> : <button>Logout</button>}
        </div>
    )
}

export default Header;