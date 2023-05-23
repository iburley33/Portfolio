import React from 'react';

function Project({imageLink, name, description}) {
    console.log({imageLink, name, description});
  
    return (
      <div className='project'>
        <h3>{name}</h3>
        <img src={imageLink}></img>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Project;
  