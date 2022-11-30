import React from 'react'
import './Header.scss'

const Header = () => {
  return (
    <div className='header'>
      <div>Games App</div>
      <a href='https://rawg.io/apidocs'>Made with <span>rawg</span> api</a>
    </div>
  )
}

export default Header