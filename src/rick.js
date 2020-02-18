import React from 'react';


const Rick = ({ name, status, species, gender, location, image }) => {
    return (
        <div>
            <h1>{name}</h1>
            <img src={image} alt="" />
            <p>Status: {status}</p>
            <p>Species: {species}</p>
            <p>Gender: {gender}</p>
            <p>Location: {location}</p>
        </div>
    );
}

export default Rick;
