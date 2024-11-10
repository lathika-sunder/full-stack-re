import React from 'react'
import './ContactUsPage.css'
import recycleBinImg from '../../assets/images/recycle-bin.png'
import { Link } from 'react-router-dom'
import { Button } from '@mui/material'
import { IoMdCall } from 'react-icons/io'
import { CgMail } from 'react-icons/cg'
import { CiLinkedin } from 'react-icons/ci'
const ContactUsPage = () => {
  return (
    <div className='contact-us'>
        
        <div className="hero-content">
        <h1>Contact <span>Us</span> </h1>
        <p>
          We help you sell your old electronics for good money. With our app,
          you can easily get rid of your unused gadgets and make some cash. Just
          tell us about your device, and we'll find buyers who'll give you the
          best price. No more keeping old stuff lying use our app now and turn
          your electronic clutter into cash!
        </p>
        <div className="buttons">
          <Link to="/sign-up">
            <Button className="btn-secondary">
              <IoMdCall/>
            </Button>
          </Link>
          <Link to="/login">
            <Button  className="btn-secondary">
              <CgMail/>
            </Button>
          </Link>
          <Link to="/login">
            <Button  className="btn-secondary">
              <CiLinkedin/>
            </Button>
          </Link>
         
        </div>
      </div>
      <div className="image-container">
        <img className="home-img" src={recycleBinImg}></img>
      </div>
    </div>
  )
}

export default ContactUsPage