import React from 'react'
import './blog.css';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './import';


const Blog = () => {
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>A lot is hapenning, We are blogging about it.</h1>
      </div>
      <div className="gpt__blog-container">
        <div className='gpt__blog-container__groupA'>
          <Article imgUrl={blog01} date = 'Feb 16, 2023' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, omnis.' />
        </div>
        <div className='gpt__blog-container__groupB'>
          <Article imgUrl={blog02} date = 'Feb 16, 2023' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, omnis.' />
          <Article imgUrl={blog03} date = 'Feb 16, 2023' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, omnis.' />
          <Article imgUrl={blog04} date = 'Feb 16, 2023' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, omnis.' />
          <Article imgUrl={blog05} date = 'Feb 16, 2023' title='Lorem ipsum dolor sit amet consectetur adipisicing elit. A, omnis.' /> 
        </div>
      </div>
    </div>
  )
}

export default Blog
