import React from 'react';


export default function About() {
    return(
       
        <div className="jumbotron">
  <h1 className="display-4">About Me</h1>
  <p className="lead">Hello!  My name is Chris Walters and I have recently completed UNH's Fullstack Web Developer Coding Bootcamp.  The program taught me so much and has helped me tremedously in my pursuit to become a Full Stack Developer.  I am very excited to see what my future in programming holds! </p>
  <hr className="my-4"/>
  <p>
HTML5 | CSS3 | JavaScript | jQuery | Node | Java | Express| React | Vue | Database Theory | MongoDB | MySQL | Command Line | Git</p>
<hr className="my-4"/>

<div className="social-links">

    {/*Github*/}

    <a href="https://github.com/cpwalters75" rel="noopener noreferrer" target="_blank"> 
    <i className="fa fa-github-square" aria-hidden="true"/>
    </a>

   {/*LinkedIn*/}

   <a href="https://www.linkedin.com/in/christopher-walters-7213a3b5/" rel="noopener noreferrer" target="_blank"> 
    <i className="fa fa-linkedin-square" aria-hidden="true"/>
    </a>
</div>

</div>
       
    );
}