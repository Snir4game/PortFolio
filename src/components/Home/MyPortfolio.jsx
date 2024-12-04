import React from 'react';
import './MyPortfolio.css';
import LinkdinPic from '../Pics/Linkdin.png';
import GmailPic from '../Pics/Gmail.png';
import GitHubPic from '../Pics/GitHub.png';
import Selfie from '../Pics/Selfie.png';
import SkillSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
const MyPortfolio = () => {

  return (
    <div className='container-fluid'>
      <div className="hero">
        <h2>Snir Amsalem</h2>
        <h4>Full Stack Developer</h4>
          <img className='Selfie' src={Selfie} alt="" />
        <div className ="Social-Media">
          <a href ="https://www.linkedin.com/in/sniramsalem/">
            <img  src = {LinkdinPic} alt="" />
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
        <p>
        My name is Snir and im 29 years old.<br />
        I Live in Beer Sheva,South of Israel. <br />
        A Dynamic and creative Full Stack Developer. <br />
        Working collaboratively in team environments. <br />
        Excels at problem-solving and learning new technologies rapidly. <br />
        Seeking to leverage software development skills in a challenging Full Stack Developer role. <br />
        </p>
      </div>
      <div className="SkillSection">
                <SkillSection />
      </div>
      <div className="ProjectsSection">
                <ProjectsSection />
      </div>
      <div className="contact">

      </div>
    </div>
  )
}

export default MyPortfolio;