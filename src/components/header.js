import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {

    const Logout = () => {
        props.setIsLoggedIn(false);
        props.setUserToken('');
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div className='container'>
                <a className="navbar-brand" href="#">Stranger's Things</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/posts">Posts</Link>
                        {props.IsLoggedIn ? <Link className="nav-item nav-link" to="/profile">Profile</Link> : null}
                        {props.IsLoggedIn ? <Link onClick={() => {
                            Logout();
                        }} className="nav-item nav-link" to="/posts">Logout</Link> : <Link className="nav-item nav-link" to="/login">Login</Link>}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;