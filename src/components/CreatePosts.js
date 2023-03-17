import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CreatePosts = (props) => {
    const [postTitle, setPostTitle] = useState('');
    const [postPrice, setPostPrice] = useState('');
    const [postDescription, setPostDescription] = useState('');
    const [postLocation, setPostLocation] = useState('');

    const newPost = () => {
        fetch('https://strangers-things.herokuapp.com/api/2211-ftb-et-web-am/posts', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.userToken}`
            },
            body: JSON.stringify({
                post: {
                    title: postTitle,
                    description: postDescription,
                    location: postLocation,
                    price: postPrice,
                    willDeliver: true
                }
            })
        }).then(response => response.json())
            .then(result => {
                console.log(result);
                props.setPosts([result.data.post, ...props.posts]);
            })
            .catch(console.error);
    }

    useEffect(() => {
    }, [postTitle, postPrice, postDescription, postLocation])

    const handlePostTitle = (event) => {
        setPostTitle(event.target.value);
    }

    const handlePostPrice = (event) => {
        setPostPrice(event.target.value);
    }

    const handlePostDescription = (event) => {
        setPostDescription(event.target.value);
    }

    const handlePostLocation = (event) => {
        setPostLocation(event.target.value);
    }

    return (
        <div className='container'>
            <h1 id='post-title'>Create New Post</h1>
            <div className="newPost">
                <form>
                    <div className='form-group'>
                        <label>Title</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handlePostTitle}>
                        </input>
                        <label id='new-post-input'>Price</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handlePostPrice}>
                        </input>
                        <label id='new-post-input'>Description</label>
                        <textarea
                            className="form-control"
                            rows="3"
                            onChange={handlePostDescription}></textarea>
                        <label id='new-post-input'>Location</label>
                        <input
                            type='text'
                            className='form-control'
                            onChange={handlePostLocation}></input>
                        <div id='new-post-input' className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"></input>
                            <label className="form-check-label">
                                Will Deliver
                            </label>
                        </div>
                        <Link to='/posts'><button
                            id='new-post-input'
                            className="btn btn-outline-primary"
                            type='button'
                            onClick={() => {
                                newPost();
                            }}>Create Post</button></Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CreatePosts;