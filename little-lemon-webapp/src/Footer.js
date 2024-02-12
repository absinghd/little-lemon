import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#home">Reservations</a>
          </li>
          <li>
            <a href="#home">Order Online</a>
          </li>
          <li>
            <a href="#home">Login</a>
          </li>
        </ul>
        <div className="footer-contact">
          <p>Contact</p>
          <br></br>
          <p>Address</p>
          <br></br>
          <p>Phone number</p>
          <br></br>
          <p>Email</p>
        </div>
        <div className="footer-socials">
          <p>Social Media</p>
          <br></br>
          <p>Facebook</p>
          <br></br>
          <p>Instagram</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
