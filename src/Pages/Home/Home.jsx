import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
       <div className="Home">
        <div className="Slider">
          <div
            id="carouselExampleFade"
            className="carousel slide carousel-fade"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/Images/Slider/Slider1.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/Images/Slider/Watch.jpg"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/Images/Slider/Slider4.jpg"
                  className="d-block w-100"
                  alt="..."
                />
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



    {/* categories Start From here */}
    
      <div className="categories">

      


        <div className="items">
          <div className="item1">
            <div className="band item-image" >
              <img src="/Images/Categories/Mask.png" alt="" />
            </div>
            <h6>Sergical Mask</h6>
          </div>
          

          <div className="item1">
            <div className="band item-Injection" >
            <img src="/Images/Categories/Equipmente.png" alt="" />
            </div>
            <h6>Equipment</h6>
          </div>

          <div className="item1">
            <div className="band item-image" >
              <img src="/Images/Categories/SafeGuard.png" alt="" />
            </div>
            <h6>Safety Guard</h6>
          </div>

          <div className="item1">
            <div className="band item-image" >
              <img src="/Images/Categories/Tablet.png" alt="" />
            </div>
            <h6>Pharmacy</h6>
          </div>

          <div className="item1">
            <div className="band item-image" >
              <img src="/Images/Categories/HandGloves.png" alt="" />
            </div>
            <h6>Hand Gloves</h6>
          </div>

          <div className="item1">
            <div className="band item-image" >
              <img src="/Images/Categories/medkits.png" alt="" />
            </div>
            <h6>MedKits</h6>
          </div>

          <div className="item1">
            <div className="band item-image" >
              <img src="/Images/Categories/Senitiezier.png" alt="" />
            </div>
            <h6>Hand Senitizare</h6>
          </div>

        </div>
      </div>


      
    </>
  );
};

export default Home;
