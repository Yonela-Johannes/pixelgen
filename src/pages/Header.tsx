import { useState } from 'react'
import logo from '../assets/PixelGen.jpg'
import { RiMenu2Fill, RiMenu3Line } from "react-icons/ri";

const Header = () => {
  const [active, setActive] = useState(false)

  return (

    <header className="header z-99999 pr-10 md:px-0" data-header>
      <div className="container">

        <a href="#" className="logo animate-pulse ml-2">
          <img src={logo} className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] object-cover rounded-xl" alt="logo" />
        </a>

        <button className="nav-open-btn bg-light p-1 md:p-2 rounded-md" aria-label="open menu" onClick={() => setActive(!active)}>
          <RiMenu3Line className="w-5 md:w-6 h-5 md:h-6 " />
        </button>

        <nav className={`${active ? "active" : ""} navbar`}>

          <div className="navbar-top">
            <a href="#" className="logo">
              <img src={logo} className="w-[30px] h-[30px] md:w-[100px] md:h-[100px]  object-cover rounded-xl" alt="pixelgen" />
            </a>

            <button className="nav-close-btn bg-light p-1 md:p-2 rounded-md" aria-label="close menu" onClick={() => setActive(false)} >
              <RiMenu2Fill className="w-5 md:w-6 h-5 md:h-6 " />
            </button>
          </div>

          <ul className="navbar-list flex flex-col gap-4 md:gap-6">

            <li className="navbar-item" onClick={() => setActive(false)}>
              <a href="#home" className={`navbar-link text-xl md:text-5xl`} data-nav-link>Home</a>
            </li>

            <li className="navbar-item" onClick={() => setActive(false)}>
              <a href="#gallery" className={`navbar-link text-xl md:text-5xl`} data-nav-link>Gallery</a>
            </li>

            <li className="navbar-item" onClick={() => setActive(false)}>
              <a href="#about" className={`navbar-link text-xl md:text-5xl`} data-nav-link>About</a>
            </li>

            <li className="navbar-item" onClick={() => setActive(false)}>
              <a href="#portfolio" className={`navbar-link text-xl md:text-5xl`} data-nav-link>Portfolio</a>
            </li>

            <li className="navbar-item" onClick={() => setActive(false)}>
              <a href="#contact" className={`navbar-link text-xl md:text-5xl`} data-nav-link>Contact</a>
            </li>

          </ul>

          <p className="navbar-title">My Address</p>

          <address className="navbar-text">
            Cape Town, South Africa
          </address>

          <div className="navbar-text">
            Call me on
            <p>
              <a href="tel:8085613846" className="contact-link text-xl md:text-3xl">+27 62 324 5563</a>
            </p>
          </div>
          <div className="navbar-text">
            Mail me on
            <p>
              <a href="mailto:denes327@gmail.com" className="contact-link text-xl md:text-3xl">denes327@gmail.com</a>
            </p>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
