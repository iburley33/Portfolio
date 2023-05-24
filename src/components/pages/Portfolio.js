import React from 'react';
import Project from '../Project';
import velocity from '../../imgs/velocity.png';
import soon from '../../imgs/soon.jpeg';

export default function Portfolio() {
  const propsArray = [
    {
      name: "Velocity",
      desc: "Your one stop shop for all things cycling. Find your nearest cycling route and current weather conditions in 1 quick search.",
      link: 'https://young-river-94596.herokuapp.com/login',
      image: velocity
    },
    {
      name: "Coming Soon!",
      desc: "Excited to share more projects with you very soon!",
      link: "link2",
      image: soon
    },
    {
      name: "Coming Soon!",
      desc: "Excited to share more projects with you very soon!",
      link: "link2",
      image: soon
    },
    {
      name: "Coming Soon!",
      desc: "Excited to share more projects with you very soon!",
      link: "link2",
      image: soon
    },
  ]
  return (

    <div class='portfolio'>
      <div class='portHead'>
        <h1>Portfolio</h1>
      </div>
      {propsArray.map((project) => {
        return <Project name={project.name} description={project.desc} image={project.image} link={project.link} />
      })}

    </div>
  );
}
