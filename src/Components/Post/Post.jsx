import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css';
const Post = ({post}) => {
    const {id , title, body} = post;
    return (
        <div className='post'>
            <h3>{id}</h3>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Show post Details </Link>
        </div>
    );
};

export default Post;