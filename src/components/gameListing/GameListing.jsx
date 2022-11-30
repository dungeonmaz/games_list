import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GameCard from '../gameCard/GameCard'
import Loader from '../loader/Loader'
import './GameListing.scss'


const GameListing = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchGames = () => {
      axios.get("https://api.rawg.io/api/games?page=1&page_size=12&key=937fe3e25014458abdead5445d62a7e3&parent_platforms=1")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }
    fetchGames()
  }, [])

  const handlePrev = () => {
    if (!data.previous) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    axios.get(data.previous)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  const handleNext = () => {
    if (!data.next) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    axios.get(data.next)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err))
  }

  return data ?
    <div className='gameListing'>
      <div className='container'>
        {data.results.map(el => (
          <GameCard key={el.slug} data={el} />
        ))}
      </div>
      <div className='buttons'>
        <button className='btn' onClick={handlePrev} disabled={!data.previous}>Prev</button>
        <button className='btn' onClick={handleNext} disabled={!data.next}>Next</button>
      </div>
    </div> : <Loader />
}

export default GameListing