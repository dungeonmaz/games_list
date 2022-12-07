import React from 'react'
import GameCard from '../gameCard/GameCard'

const GameContainer = ({data}) => {
  return (
    <div className='container'>
    {data.results.map(el => (
      <GameCard key={el.slug} data={el} />
    ))}
  </div>
  )
}

export default GameContainer