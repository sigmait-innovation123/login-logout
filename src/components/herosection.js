import React from 'react'

export default function Herosection() {
  return (
    <div><div id="carouselExample" className="carousel slide">
    <div className="carousel-inner">
      <div className="carousel-item active " >
        <img src="https://source.unsplash.com/random/500x200/?nature" className="d-block w-100 h-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/500x200/?fruit" className="d-block w-100 h-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://source.unsplash.com/random/500x200/?flower" className="d-block w-100 h-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}
