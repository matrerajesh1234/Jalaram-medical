import React from 'react'
import './Error.css'
import { NavLink } from 'react-router-dom'

const Error = () => {
  return (
    <>
      <div className="error">
        <div className="section1">
          <h2>Oooops!</h2>
          <h3>We’re broken</h3>
          <h4>
          "Let's navigate back in healthcare together. Click the button to return to the correct page. </h4>
          <NavLink to='/'>
          <button>
            Go To Home Page
          </button>
          </NavLink>
        </div>
        <div className="section2">
          <img src="/Images/Error/pagenotfound.png" alt="" />
        </div>
        </div>
    </>
  )
}

export default Error
