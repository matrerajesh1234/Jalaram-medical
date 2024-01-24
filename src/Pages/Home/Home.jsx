import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
      <div className="Home">
        <div className="Slider">

       
        <div id="carouselExampleFade" className="carousel slide carousel-fade">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/Images/Slider/Slider1.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Images/Slider/Slider2.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/Images/Slider/Slider4.jpg" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Home
