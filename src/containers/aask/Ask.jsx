import React, { useState } from 'react'

import './Ask.css';

const Ask = () => {

  const[ query, setQuery] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const handleClear = (e) => {
    e.preventDefault();

    setQuery('');
  };

  return (
    <div className='gpt__ask' id='ask'>
      <div className='gpt__ask-heading'>
        <p>Ask</p>
        <button type='button'>Anything!</button>
      </div>
      <div className='gpt__ask-description'>
        <p>Get instant and accurate answers to all your questions</p>
      </div>
      <br /><br />
      <div className='gpt__ask-form'>
        <p>ferr </p>
        <form onSubmit={handleSubmit}>
          <div className='gpt__ask-form-text'>
            <textarea placeholder='Enter your query here' value={query} onChange={(e) => setQuery(e.target.value)} required />
          </div>
          <div className='gpt__ask-form-button'>
            <button>Submit</button>
            <br />
            <button onClick={handleClear} >Clear</button>
          </div>
          <div>
           <textarea placeholder='Your answer will display here.' value={query} onChange={(e) => setQuery(e.target.value)} required />
          </div>
          <div className=''>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Ask
