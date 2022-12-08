import React from 'react'
import './card.css'

const Card = ({item}) => {
  return (
    <a href={item.url}>
      <div className='blog-card'>
        <div className='hover-text'><h2>Read Blog</h2></div>
        <img src={item.image.url} alt="article_image" />
        <div className='blog-details'>
          <h5>{item.title}</h5>
          <p>{item.description}</p>
        </div>
      </div>
    </a>
  )
}

export default Card