import React, {useState} from "react"
import {useHistory} from 'react-router-dom';
import { Button, Form, Input, Label} from 'semantic-ui-react'
import { createPost } from "../api/api"

const Create = (props) => {
    const history = useHistory();
    const setPosts = props.setPosts
    const token = props.token
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])
    const [price, setPrice] = useState([])
    const [errorMessage, setErrorMessage] = useState(null);

    // console.log(title)
return <>
<div className="homePage" id="createPost">
    <h1>
    Create a Post
    </h1>
    <Form id="form" onSubmit={async (event) => {
        event.preventDefault();

        const {error, post} = await createPost(token, title, description, price);

        if (post) {
            setPosts((prevPosts) => [...prevPosts, post]);
            setTitle('');
            setDescription('');
            setPrice('');

            history.push('/posts');
        } else {
            setErrorMessage(error);
        }
    }}>
    <Form.Field value={title} onChange={(event)=>{setTitle(event.target.value)}}>
    <label>Title</label>
      <input placeholder='Title' />
    </Form.Field>
    <Form.Field value={description} onChange={(event)=>{setDescription(event.target.value)}}>
    <label>Description</label>
      <input placeholder='Description' />
    </Form.Field>
    <Form.Field value={price} onChange={(event)=>{setPrice(event.target.value)}}>
    <label>Price</label>
      <input placeholder='Price' />
    </Form.Field>
        <Button type="submit" className="submitPostButton">Create</Button>
    </Form>
</div>

</>
// posts.setState(previousPosts => ({
//     posts: [...previousPosts.posts, newPost]
// }));
}

export default Create;