import React from 'react';

const User = ({ data }) => {
    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.website}</p>
        </div>
    );
}

export default User;
