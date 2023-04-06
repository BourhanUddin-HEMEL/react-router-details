import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
   const friend = useLoaderData();
    // console.log(friend.name)
    return (
        <div>
            <h1>Friend Details here </h1>
            <h4>Name : {friend.name}</h4>
            <p>phone : {friend.phone}</p>
        </div>
    );
};

export default FriendDetails;