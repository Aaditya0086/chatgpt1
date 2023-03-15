import React from 'react'
import './whatGPT.css';
import {Feature} from '../../components';

const WhatGPT = () => {
  return (
    <div className='gpt__Whatgpt section__margin' id='Wgpt'>
      <div className="gpt__Whatgpt-feature">
        <Feature title='What is GPT' text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione molestias velit asperiores cumque, enim aspernatur dolorum eius, eveniet ab tempora saepe iure!ncdweioqufhu qhuidfiq dqwuidbgiwud uiqdbiuwbdiqudb qwvd dqywd fqiwyfdyieqw fuigqf wedf quif uweicdbquiwef dwuiqd qwui dfwqui dfwgquidb qwuid gq eud wuiqd wuiqd wqud uiwd wqiuduwq uidq.' />
      </div>
      <div className="gpt__Whatgpt-heading">
        <h1 className='gradient__text'>The Possiblities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt__Whatgpt-container">
        <Feature title='Chatbots' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quae praesentium sit ea repellendus optio.' />
        <Feature title='Knowledgebase' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quae praesentium sit ea repellendus optio.' />
        <Feature title='Education' text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt quae praesentium sit ea repellendus optio.' />
      </div>
    </div>
  )
}

export default WhatGPT
