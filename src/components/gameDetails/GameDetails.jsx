import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from '../loader/Loader'
import './GameDetails.scss'

const GameDetails = () => {
  const [data, setData] = useState()
  const [screenshots, setScreenshots] = useState()

  useEffect(() => {
    const link = window.location.href
    const id = link.slice(link.lastIndexOf('/') + 1)
    const fetchGame = () => {
      axios.get(`https://api.rawg.io/api/games/${id}?key=937fe3e25014458abdead5445d62a7e3`)
        .then(res => setData(res.data))
        .catch(err => console.log(err))
      axios.get(`https://api.rawg.io/api/games/${id}/screenshots?key=937fe3e25014458abdead5445d62a7e3`)
        .then(res => setScreenshots(res.data.results))
        .catch(err => console.log(err))
    }

    fetchGame()
  }, [])
  return data ?
    <div className='gameDetails'>
      <div className='titleContainer'>
        <h3 className='title'>{data.name}</h3>
        <p>{data.released}</p>
      </div>
      <p>{data.description_raw}</p>
      <div className='container'>
        <div className='rating'>
          <p>Rating : {data.rating}</p>
          <div className='ratings'>
            {data.ratings.map(el => (
              <div key={el.title}>{el.title.slice(0, 1).toUpperCase() + el.title.slice(1)} : {el.count}</div>
            ))}
          </div>
        </div>
        <div className='genres'>
          {data.genres.map(el => (
            <p key={el.id}>{el.name}</p>
          ))}
        </div>
      </div>
      {screenshots ?<div className='imageContainer'>
        {screenshots.map(el => (
          <img src={el.image} key={el.id} alt=""/>
        ))}
      </div> : <Loader />}
    </div> : <Loader />

}

export default GameDetails