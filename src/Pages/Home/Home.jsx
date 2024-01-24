import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <>
    <div className='Home'>
      <div className="Slider">

      
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://media.gettyimages.com/id/1233011280/photo/francisco-martin-demonstrates-the-use-of-a-pulse-oximeter-that-measures-blood-oxygen-levels.jpg?s=612x612&w=0&k=20&c=uM26rK_gdONe0BaQ5DHcY8cviy1x1KON0zhv-colKGg=" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item ">
              <img src="https://media.gettyimages.com/id/1363371727/photo/man-testing-his-oxygen-saturation-at-home-using-pulse-oximeter.jpg?s=612x612&w=0&k=20&c=2ADptN4SktO_VV2ak6ZN1TsT_o2mPZ82xLtXMVQ1apU="  className='d-block w-100' alt="..."/>
            </div>
            <div className="carousel-item">
              <img src="https://media.gettyimages.com/id/1291425639/photo/oximeter-for-checking-oxygen-saturation-in-blood-on-male-hand.jpg?s=612x612&w=0&k=20&c=VtRcijdFbl5LRC2c-UlWHiEYwhin2jzP4ZsuTJYcPmA=" className='d-block w-100' alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        </div>
    </div>
    </>
    
  )
}

export default Home
