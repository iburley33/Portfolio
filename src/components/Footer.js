import React from 'react';
import linkedin from '../imgs/linkedin.png'
import github from '../imgs/github.png'


// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function Footer() {
    return (
        <footer>
            <div class='linkDiv'>
            <a href='https://www.linkedin.com/in/ian-burley/'>
                <img class='liLink' src={linkedin}></img>
            </a>
            <a href='https://github.com/iburley33'>
                <img class='ghLink' src={github}></img>
            </a>
            </div>
        </footer>
    );
}

export default Footer;
