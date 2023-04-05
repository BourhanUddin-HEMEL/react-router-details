import React from 'react';
import './Friend.css';
const Friend = ({friend}) => {
    const {id, name, email,phone} = friend;
    return (
       <>
        <div className='friend'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p>{phone}</p>
        </div>
       </>
    );
};

export default Friend;