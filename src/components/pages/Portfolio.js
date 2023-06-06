import React from 'react';
import Project from '../Project';
import velocity from '../../imgs/velocity.png';
import soon from '../../imgs/soon.jpeg';
import eatball from '../../imgs/eatball.png'

export default function Portfolio() {
  const propsArray = [
    {
      name: "Velocity",
      desc: "Your one stop shop for all things cycling. Find your nearest cycling route and current weather conditions in 1 quick search.",
      link: 'https://young-river-94596.herokuapp.com/login',
      image: velocity
    },
    {
      name: "The Magic Eat Ball!",
      desc: "A conversation starter and a conversation ender. Let The Magic Eatball decide your next meal for you.",
      link: "https://lit-brushlands-86158.herokuapp.com/",
      image: eatball
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
