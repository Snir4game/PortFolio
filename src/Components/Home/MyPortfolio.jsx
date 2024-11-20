import React from 'react';
import './MyPortfolio.css';
import LinkdinPic from '../Pics/Linkdin.png';
import GmailPic from '../Pics/Gmail.png';
import GitHubPic from '../Pics/GitHub.png';
import Selfie from '../Pics/Selfie.png';
import SkillSection from './SKillsSection';

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
        Dynamic and creative Full Stack Developer <br />
        working collaboratively in team environments. <br />
        Excels at problem-solving and learning new technologies rapidly. <br />
        Seeking to leverage software development skills in a challenging Full Stack Developer role. <br />
        </p>
      </div>
      <div className="container py-5"> {/* Added padding */}
        <div className="row justify-content-center">
          <div className="col-lg-8"> {/* Changed to lg-8 for better width on larger screens */}
            <div className="card shadow"> {/* Added card with shadow for better visual */}
              <div className="card-body">
                <SkillSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects">

      </div>
      <div className="contact">

      </div>
    </div>
  )
}

export default MyPortfolio;