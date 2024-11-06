import React from 'react';
import './MyPortfolio.css';
import LinkdinPic from '../Pics/Linkdin.png';
import GmailPic from '../Pics/Gmail.png';
import GitHubPic from '../Pics/GitHub.png';

const MyPortfolio = () => {
  return (
    <div>
      <div className="hero">
        <h2>Snir Amsalem</h2>
        <h4>Full Stack Developer</h4>
        <div className ="Social-Media">
          <a href ="https://www.linkedin.com/in/sniramsalem/">
            <img src = {LinkdinPic} alt="" />
          </a>
          <a href = "mailto:Sniramsalem1995@gmail.com">
            <img src = {GmailPic} alt="" />
          </a>
          <a href = "https://github.com/Snir4game">
            <img src = {GitHubPic} alt="" />
          </a>
        </div>
      </div>
      <div className="about">

      </div>
      <div className="skills">

      </div>
      <div className="projects">

      </div>
      <div className="contact">

      </div>
    </div>
  )
}

export default MyPortfolio