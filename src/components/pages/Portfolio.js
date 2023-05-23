import React from 'react';
import Project from '../Project';

export default function Portfolio() {
  const propsArray = [
    {
      name: "name1",
      desc: "desc1",
      link: "link1"
    },
    {
      name: "name2",
      desc: "desc2",
      link: "link2"
    },
    {
      name: "name3",
      desc: "desc3",
      link: "link3"
    },
    {
      name: "name4",
      desc: "desc4",
      link: 'link4',
    },
  ]
  return (

    <div class='portfolio'>
      <div class='portHead'>
        <h1>Portfolio</h1>
      </div>
      {propsArray.map((project) => {
        return <Project name={project.name} description={project.desc} imageLink={project.link} />
      })}

    </div>
  );
}
