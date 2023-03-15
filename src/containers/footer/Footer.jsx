import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';


const Footer = () => {
  return (
    <div className='gpt__footer section__padding' id='footer'>
      <div className='gpt__footer-heading'>
        <h1 className='gradient__text'>Do you want to step into Future before others.</h1>
      </div>
      <div className='gpt__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt__footer-links'>
        <div className='gpt__footer-links__logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, veniam.</p>
        </div>
        <div className='gpt__footer-links__div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt__footer-links__div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt__footer-links__div'>
          <h4>Get in Touch</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>46448-46846</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='gpt__footer-copyright'>
        <p>© 2023 GPT. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
