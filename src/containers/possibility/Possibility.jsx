import React from 'react'
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt__possibility section__padding' id='possibility'>
      <div className='gpt__possibility-image'>
        <img src={possibilityImage} alt="possibility-image" />
      </div>
      <div className='gpt__possibility-content'>
        <h4>Request Early access to Get Started.</h4>
        <h1 className='gradient__text'>The possibilities are beyond your immagination.</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro blanditiis et, quidem sequi beatae ducimus, commodi voluptates quisquam, dolor ratione accusamus maiores dolore culpa perferendis.</p>
        <h4>Request Early access to Get Started.</h4>
      </div>
    </div>
  )
}

export default Possibility
