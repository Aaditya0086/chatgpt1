import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT, Ask } from './containers'
import { Brand, CTA, Navbar } from './components'
import './App.css';
// import Ask from './containers/ask/Ask';

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog/>
      <Ask/>
      <Footer/>
    </div>
  )
}

export default App
