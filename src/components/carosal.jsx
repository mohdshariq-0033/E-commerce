import React from 'react'

export default function carosal() {
  return (
    <>
         <div
  id="carouselExampleAutoplaying"
  className="carousel slide mt-5 hitSet"
  data-bs-ride="carousel"
  
>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/image1.avif" className="d-block w-100" alt="image" />
    </div>
    <div className="carousel-item">
      <img src="/images/image2.avif" className="d-block w-100" alt="image" />
    </div>
    <div className="carousel-item">
      <img src="/images/image3.avif" className="d-block w-100" alt="image" />
    </div>
  </div>
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleAutoplaying"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}
