import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h1>This is Friends page : {friends.length}</h1>
        </div>
    );
};

export default Friends;