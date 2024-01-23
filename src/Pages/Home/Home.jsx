import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='Home'>
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/Images/Slider/Slider1.jpg" class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="/Images/Slider/Slider2.jpg" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="/Images/Slider/Slider3.jpg" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
    </div>
    </>
    
  )
}

export default Home
