import React from 'react';

function Project({ image, name, description, link }) {
  console.log({ image, name, description, link });

  return (

    <div className='project'>
        <h3>{name}</h3>
        <a href={link} class='imgLink'>
        <img src={image} class='cardImg'></img>
      </a>
      <p>{description}</p>
    </div>
  );
}

export default Project;
