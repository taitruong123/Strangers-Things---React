import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import AllPosts from './components/AllPosts';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import CreatePosts from './components/CreatePosts';


const App = () => {
    const [ posts, setPosts ] = useState([]);
    const [ IsLoggedIn, setIsLoggedIn ] = useState(false);
    const [ userToken, setUserToken ] = useState('');

    console.log(posts);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts');
            const data = await response.json();

            setPosts(data.data.posts);
        }

        fetchPosts();

    }, [])

    return (
        <div>
            <Header IsLoggedIn={IsLoggedIn} setIsLoggedIn={setIsLoggedIn} userToken={userToken} setUserToken={setUserToken}  />

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/posts' element={<AllPosts IsLoggedIn={IsLoggedIn} posts={posts} setPosts={setPosts} userToken={userToken}/>}></Route>
                <Route path='/createposts' element={<CreatePosts userToken={userToken} posts={posts} setPosts={setPosts}/>}></Route>
                <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} IsLoggedIn={IsLoggedIn} setUserToken={setUserToken} />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/register' element={<Register setUserToken={setUserToken} setIsLoggedIn={setIsLoggedIn} IsLoggedIn={IsLoggedIn} />}></Route>
            </Routes>
        </div>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <HashRouter>
        <App />
    </HashRouter>
)