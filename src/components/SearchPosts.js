import React from 'react';

const SearchPosts = (props) => {

    return (
        <div>
            <div className="newPost">
                <form className="input-group flex-nowrap" onSubmit={(event) => {
                    event.preventDefault();
                    props.setSearchPosts(event.target[0].value);
                }}>
                    <input id='search-bar' type='search' className="form-control" placeholder='Search...'></input>
                    <button className="btn btn-outline-primary" type='button'>Search</button>
                </form>
            </div>
        </div>
    )
}

export default SearchPosts;