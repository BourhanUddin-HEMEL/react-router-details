import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';
const Post = ({post}) => {
    const {id , title, body} = post;
    const navigate = useNavigate();
    const handleNavigation = ()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h3>{id}</h3>
            <h5>{title}</h5>
            <Link to={`/post/${id}`}>Show post Details </Link>
            <Link to={`/post/${id}`}><button>Show details post</button></Link>
            <button onClick={handleNavigation}>With Button Handler</button>
        </div>
    );
};

export default Post;