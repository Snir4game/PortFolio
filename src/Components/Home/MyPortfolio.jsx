import React from 'react';
import './MyPortfolio.css';
import LinkdinPic from '../Pics/Linkdin.png';
import GmailPic from '../Pics/Gmail.png';
import GitHubPic from '../Pics/GitHub.png';
import Selfie from '../Pics/Selfie.png';
const MyPortfolio = () => {
  
  return (
    <div className='container-fluid'>
      <div className="hero">
        <h2>Snir Amsalem</h2>
        <h4>Full Stack Developer</h4>
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
          <img className='Selfie' src={Selfie} alt="" />
      </div>
      <div className="about">
        <p>
        Dynamic and creative Full Stack Developer <br />
        working collaboratively in team environments. <br />
        Excels at problem-solving and learning new technologies rapidly. <br />
        Seeking to leverage software development skills in a challenging Full Stack Developer role. <br />
        </p>
      </div>
      <div className="container mt-1">
        <table className='table'>
          <thead>
            <tr>
              <th>Skill</th>
              <th>Proficiency</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <th>JavaScrip</th>
              </tr>
              <tr>
                <th>HTML</th>
              </tr>
              <tr>
                <th>CSS</th>
              </tr>
              <tr>
                <th>React</th>
              </tr>
              <tr>
                <th>React-Native</th>
              </tr>
              <tr>
                <th>FireBase</th>
              </tr>
              <tr>
                <th>BootStrap</th>
              </tr>
              <tr>
                <th></th>
              </tr>
            </tbody>
        </table>
      </div>
      <div className="projects">

      </div>
      <div className="contact">

      </div>
    </div>
  )
}

export default MyPortfolio