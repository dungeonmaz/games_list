import React from 'react'
import { useNavigate } from 'react-router-dom'
import './GameCard.scss'

const GameCard = ({ data }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/game/${data.id}`)
  }

  return (
    <div className='gameCard'>
      <img src={data["background_image"]} alt={data.slug} />
      <div className="inner">
        <h3>{data.name}</h3>
        <p>{data.released}</p>
        <p className='rating'>Rating: {data.rating}</p>
        <div className="genres">
          {data.genres.map(el => (
            <p key={el.id}>{el.name}</p>
          ))}
        </div>
        <div style={{ flex: 1 }}></div>
        <button className='btn' onClick={handleClick}>Read more</button>
      </div>
    </div>
  )
}

export default GameCard