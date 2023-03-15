import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT } from './containers'
import { Brand, CTA, Navbar } from './components'
import './App.css';

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
      <Footer/>
    </div>
  )
}

export default App
