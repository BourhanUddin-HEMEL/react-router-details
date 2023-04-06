import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetail = () => {
    const postDetail = useLoaderData();
    // console.log(postDetail)
    const {id, title, userId,body} = postDetail;
    const navigate = useNavigate();
    const handleGoBack = ()=>{
            navigate(-1);
    }
    return (
        <div>
            <h1>Post details here </h1>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h5>{body}</h5>
            <button onClick={handleGoBack}>go back</button>
        </div>
    );
};

export default PostDetail;