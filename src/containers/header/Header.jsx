import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt__header section__padding' id='home'>
      <div className="gpt__header-content">
        <h1 className='gradient__text'>Let's Build Something amazing with GPT OpenAI</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus rerum suscipit maxime? Ipsam voluptatem consequuntur fugiat cumque at dignissimos nobis dolore quae praesentium odio culpa voluptatibus, quia necessitatibus ratione minus dolores exercitationem perspiciatis!</p>
        <div className="gpt__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className="gpt__header-content__people">
          <img src={people} alt="people"/>
          <p>1,600 people requested access a visit in last 24 hours </p>
        </div>
      </div>
      <div className="gpt__header-image">
        <img src={ai} alt="ai image" />
      </div>
    </div>
  )
}

export default Header
