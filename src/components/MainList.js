import React,{useEffect} from "react";
const COHORT_NAME = '2211-FTB-ET-WEB-AM'
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

const MainList = ({setPosts, posts}) => {
    useEffect(() => {
        const fetchPosts = async () => {
            try {
              const response = await fetch(`${BASE_URL}/posts`)
              const result = await response.json();
              console.log(result.data.posts);
              setPosts(result.data.posts);
            } catch (err) {
              console.error(err);
            }
          }
        fetchPosts()
    },[]);
    return(<div>
        {posts.map(post => {
            return(<div>
                <p>{post.title}</p>
                <p>{post.author.username}</p>
                <p>{post.description}</p>
                <p>{post.location}</p>
                <p>{post.price}</p>
            </div>)
        })}
    </div>)
}

export default MainList;