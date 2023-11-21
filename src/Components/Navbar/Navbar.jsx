import React from 'react'

export const Navbar = () => {
  return (
    <nav className="nav container">
    <img src="https://i.ibb.co/FzSR1vP/968843-removebg-preview.png" style={{maxHeight: '40px'}}/>
     <div className="nav__menu" id="nav-menu">
        <ul className="nav__list">
          <li className="nav__item"><a href="/#home" className="nav__link active-link">Home</a></li>
          <li className="nav__item"><a href="/#about" className="nav__link">About</a></li>
          <li className="nav__item"><a href="/#services" className="nav__link">Services</a></li>
          <li className="nav__item"><a href="/#doctors" className="nav__link">  Doctors</a></li>
          <li className="nav__item"><a href="/#subscribe" className="nav__link">Help Box</a></li>
          <li className="nav__item"><a href="/#appointment" className="nav__link">Appointment</a></li>
        </ul>
     </div>
   </nav>
  )
}
