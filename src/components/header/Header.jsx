import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className='logo'>
          <h1>FutureShop</h1>
        </div>
        <div className='menu'>
          <a href="Products">Products</a>
          <a>Contact</a>
        </div>
    </div>
  )
}
