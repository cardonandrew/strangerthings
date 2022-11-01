import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import './components.css'



const Posts = (props) => {
    const posts = props.posts
    
    

    return <div className="homePage">
        <p className="pageTitle">Posts</p>
        <div id="posts">
    {   
        posts.map(post => <div id="singlePost" key={post._id} posts={post}>
        <h1>{post.title}</h1>
        <h3>{post.description}</h3>
        <h3>Price: {post.price}</h3>
        <h3>Location: {post.location}</h3>
        <h3>Will deliver?: {post.willDeliver}</h3>
        <h3 id="author">user: {post.author.username}</h3>
        <button>Message</button>
        
        
        </div>) 
    }
        </div>
    </div>
    
}


export default Posts;