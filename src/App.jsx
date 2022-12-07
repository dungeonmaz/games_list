import React from 'react'
import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import GameDetails from './components/gameDetails/GameDetails'
import GameListing from './components/gameListing/GameListing'
import Header from './components/header/Header'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<GameListing />} />
          <Route path="/:params" element={<GameListing />} />
          <Route path="/game/:rawgId" element={<GameDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App