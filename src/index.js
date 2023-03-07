import React,{useState,useEffect} from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'
import MainList from './components/MainList';
import LogIn from './components/Login';



const App = () => {
    const [posts, setPosts] = useState([])
    return (
        <>
        <h1>Strangers Things React</h1>
        <MainList setPosts={setPosts} posts={posts}/>
        </>
    )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
