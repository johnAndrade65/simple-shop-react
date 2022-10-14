import React from 'react'
import './ScreenProducts.css'

export default function screenProducts() {
  return (
    <div className='screenProducts'>
        <div className='textProducts'>
            <h2 className='textProducts'>50% off promotion!!</h2>
        </div>
        <div className="container">
            <div className="item">
                <img className='img' src=".././public/product.png" alt="iphone 14" />
                <p className='t'>Product Example</p>
                <p className='description'>The Apple iPhone 14 is an advanced and comprehensive iOS smartphone from...</p>
            </div>
            <div className="item">
                <img className='img' src=".././public/product.png" alt="iphone 14" />
                <p className='t'>Product Example</p>
                <p className='description'>The Apple iPhone 14 is an advanced and comprehensive iOS smartphone from...</p>
            </div>
        </div>
        <div className='viewmore'>
            <button className='button'><a className='a' href="/Products">View more</a></button>
        </div>
    </div>
  )
}
