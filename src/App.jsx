import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Header from './components/Header'
import Body from './components/Body';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Body />
      </main>
    </div>
  )
}

export default App