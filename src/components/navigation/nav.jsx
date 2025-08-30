import React from 'react'
import './style.css'
function Nav () {
  return (
    <div className='nav-bar'>
      <div className='nav-bar-wrapped'>
        <div className='logo'>
          <img src='/public/Frame 4.svg' alt='' />
        </div>
        <button className='catalog'>
          <img
            src='/public/catalog.svg'
            alt=''
            className='catalog-img
          '
          />
          <p>Каталог</p>
          <img src='/public/down.svg' alt='' />
        </button>
        <div className='search-field'>
          <input type='text' className='search' />
          <img src='/public/search.svg' alt='' className='search-icon' />
        </div>
        <a href='#' className='phone-number'>
          <img src='/public/phone.svg' alt='' className='phone' />
          <p>+7 (342) 211-07-98</p>
        </a>
        <div className='icon'>
          <img src='/public/like.svg' alt='' />
          <img src='/public/cart.svg' alt='' />
        </div>
      </div>
    </div>
  )
}

export default Nav
