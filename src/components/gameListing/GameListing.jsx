import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loader from '../loader/Loader'
import GameContainer from './GameContainer'
import './GameListing.scss'

const GameListing = () => {
  const [data, setData] = useState()
  const [page, setPage] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    const link = window.location.pathname.slice(1)
    let p = page
    if(link) {
      p = link.slice(5)
      setPage(Number(p))
    }
    let axiosLink = `https://api.rawg.io/api/games?&page_size=12&key=937fe3e25014458abdead5445d62a7e3&page=${Number(p)}`
    const fetchGames = () => {
      axios.get(axiosLink)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err))
    }
    fetchGames()
  }, [page])

  const handlePrev = () => {
    if (!data.previous) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setPage((prev) => prev - 1)
    navigate(`/page=${page - 1 }`)
  }

  const handleNext = () => {
    if (!data.next) return
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
    setPage((prev) => prev + 1)
    navigate(`/page=${page + 1}`)
  }

  return data ?
    <div className='gameListing'>
      <GameContainer data={data}/>
      <div className='buttons fixed-bottom'>
        <button className='btn' onClick={handlePrev} disabled={!data.previous}>Prev</button>
        <button className='btn' onClick={handleNext} disabled={!data.next}>Next</button>
      </div>
    </div> : <Loader />
}

export default GameListing