import React from 'react';
import art from '../../imgs/art.png'

export default function About() {
  return (
    <div class='base'>
      <div class='artBox'>
      <h1 class='loud'>Full</h1>
      <h1 class='loud'>Stack</h1>
      <h1 class='loud'>Developer</h1>
      <img src={art} class='art'></img>
      </div>
    <div class="div1">
      <h1>About Me</h1>
      <h3 class='name2'>My name is Ian Burley. I'm a Professional Web Developer.</h3>
      <p>
      I’m also a proud husband and father of two. I’m interested in tech, fitness, hiking, gaming and honestly anything fun as long as my kids can come. My family and I are always looking for the next new experience and I’m always in a hurry to show the beauty of the world to my daughters. My family, including my big ol’ golden-doodle Jake, have blessed me with a perfect life and thanks to their support, I’m very excited to be on my new path to a career in tech.
      </p>
      <p>
        Hello world! I wrote my first line of code in 2015. Around the same time I attempted to leave my career in fitness and return to school to pursue a degree in computer science but my company needed me and they made me an offer I couldn't refuse if I would stay on board and continue to help them grow. At which point I began to travel the nation for them and lived half of my life on the road.
      </p>
      <p>
        So I decided to go the self taught route for some time, dabbled with friends, consumed content from YouTube, got a Treehouse membership, and just picked the brains of my developer friends whenever I could. It was just a hobby until Covid-19 and my life got flip turned upside down. During the pandemic I was given a lot more time to pursue my hobby while I didn't have to worry about my typical career reponsibilities during closures. It was during this time that I decided it was time to get more serious about my hobby.
      </p>
      <h4>
        In 2022 I graduated from University of California's Full Stack Web Development Program.
      </h4>
      <p>
        Since then I have been fortunate enough to connect with many talented developers and pursue my passion for creating, breaking and rebuilding new things. Let's build something together! 
      </p>
    </div>
    </div>
  );
}
