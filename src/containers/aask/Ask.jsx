// import React, { useState } from 'react'

// import './Ask.css';

// const Ask = () => {

//   const[ query, setQuery] = useState('');
//   const[ answer, setAnswer] = useState('');


//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setAnswer("Your api key is exhausted. Please renew it.")

//   }

//   const handleClear = (e) => {
//     e.preventDefault();

//     setQuery('');
//   };

//   return (
//     <div className='gpt__ask' id='ask'>
//       <div className='gpt__ask-heading'>
//         <p>Ask</p>
//         <button type='button'>Anything!</button>
//       </div>
//       <div className='gpt__ask-description'>
//         <p>Get instant and accurate answers to all your questions</p>
//       </div>
//       <br /><br />
//       <div className='gpt__ask-form'>
//         <p>ferr </p>
//         <form >
//           <div className='gpt__ask-form-text'>
//             <textarea placeholder='Enter your query here' value={query} onChange={(e) => setQuery(e.target.value)} required />
//           </div>
//           <div className='gpt__ask-form-button'>
//             <button  onClick={handleSubmit} >Submit</button>
//             <br />
//             <button onClick={handleClear} >Clear</button>
//           </div>
//           <div>
//            <textarea placeholder='Your answer will display here.' value={answer} onChange={(e) => setAnswer(e.target.value)} required />
//           </div>
//           <div className=''>

//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Ask



import React, { useState } from 'react';

import './Ask.css';

const Ask = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setAnswer('Your API key is exhausted. Please renew it.');
  };

  const handleClear = (e) => {
    e.preventDefault();
    setQuery('');
    setAnswer('');
  };

  const isSubmitDisabled = query.trim() === ''; // Check if the query is empty or only whitespace

  return (
    <div className='gpt__ask' id='ask'>
      <div className='gpt__ask-heading'>
        <p>Ask</p>
        <button type='button'>Anything!</button>
      </div>
      <div className='gpt__ask-description'>
        <p>Get instant and accurate answers to all your questions</p>
      </div>
      <br />
      <br />
      <div className='gpt__ask-form'>
        <p>ferr </p>
        <form>
          <div className='gpt__ask-form-text'>
            <textarea
              placeholder='Enter your query here'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              required
            />
          </div>
          <div className='gpt__ask-form-button'>
            <button onClick={handleSubmit} disabled={isSubmitDisabled}>
              Submit
            </button>
            <br />
            <button onClick={handleClear} disabled={isSubmitDisabled} >Clear</button>
          </div>
          <div className='gpt__ask-form-text2'>
            <textarea
              placeholder='Your answer will display here.'
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              readOnly
              required
            />
          </div>
          {/* <div className=''></div> */}
        </form>
      </div>
    </div>
  );
};

export default Ask;

