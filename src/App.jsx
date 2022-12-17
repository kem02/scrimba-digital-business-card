import { useState } from 'react'
import mailLogo from './assets/Mail.png'
import twitterLogo from './assets/Twitter Icon.png'
import facebookLogo from './assets/Facebook Icon.png'
import instagramLogo from './assets/Instagram Icon.png'
import linkedinLogo from './assets/Linkedin Icon.png'
import githubLogo from './assets/GitHub Icon.png'
import './App.css'

function Info(){
  return(
    <div className="info-container">
      <img src='https://via.placeholder.com/317x317'/>
      <h1>Kevin Molina</h1>
      <h2>Frontend Developer</h2>
      <h3>kevinmolina.website</h3>
      <div className="btn-class">
        <button className='btn-email'>
          <img src={mailLogo}/>Email
        </button>
      </div>
      
    </div>
  )
}

function About(){
  return(
    <div className="about-container">
      <h2>About</h2>
      <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
    </div>
  )
}

function Interests(){
  return(
    <div className="interests-container">
      <h2>Interests</h2>
      <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
    </div>
  )
}

function Footer(){
  return(
    <div className="footer-container">
      <img src={twitterLogo}/>
      <img src={facebookLogo}/>
      <img src={instagramLogo}/>
      <img src={linkedinLogo}/>
      <img src={githubLogo}/>

    </div>
  )
}


function App() {
  
  return (
    <div className="app-container">
      <div className='card-container'>
        <Info />
        <About />
        <Interests />
        <Footer />
      </div>
      
      
    </div>
  )
}

export default App
