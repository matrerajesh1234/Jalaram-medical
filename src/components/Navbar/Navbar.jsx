  import React, { useState } from 'react'
  import './Navbar.css'
  import '/src/Styles/Responsive.css'
  import { NavLink } from 'react-router-dom'





  const Navbar = () => {

      const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

      const toggleMobileMenu = () => {
          setMobileMenuOpen(!isMobileMenuOpen);
        };
      
        const closeMobileMenu = () => {
          setMobileMenuOpen(false);
        };



    return (
      <>
      <div className='Header'>
    
      <div className={`Navbar ${isMobileMenuOpen ? 'active' : ''}`}>
        <NavLink to='/'>
          <div className="logo">
              <img src="/Images/jalaram.png" alt="" />
          </div>
          </NavLink>
          <div className="hamburger" onClick={toggleMobileMenu}>
                  <i className="fa-solid fa-bars"></i>
              </div>
              <div className={`Navmenu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul>
              <li><NavLink to="/" onClick={closeMobileMenu}>Home</NavLink></li>
              <li><NavLink to='/about' onClick={closeMobileMenu}>About</NavLink></li>
              <li><NavLink to='/contact' onClick={closeMobileMenu}>Contact</NavLink></li>
              <li><NavLink to='/products' onClick={closeMobileMenu}>Product</NavLink></li>
            </ul>
      </div>
      <div className='Navbar-right'>
            <div className={`icons ${isMobileMenuOpen ? 'active' : ''}`}>
              <NavLink to='/login' className={`Navlink-icons ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
                <i className="fa-solid fa-user"></i>
              </NavLink>
              <NavLink to='/wishlist' className={`Navlink-icons ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
              <i className="fa-sharp fa-solid fa-heart"></i>
              </NavLink>
              <NavLink to='/cart' className={`Navlink-icons ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}>
              <i className="fa-solid fa-cart-plus"></i>
              </NavLink>
            </div>
          </div>    
      </div>
      </div>
      </>
    )
  }

  export default Navbar
