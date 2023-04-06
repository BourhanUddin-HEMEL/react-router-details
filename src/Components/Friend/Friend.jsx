import React from 'react';
import { Link } from 'react-router-dom';
import './Friend.css';
const Friend = ({friend}) => {
    const {id, name, email,phone} = friend;
    return (
       <>
        <div className='friend'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
            <p> <Link to ={`/friend/${id}`}>Show Details</Link></p>
        </div>
       </>
    );
};

export default Friend;