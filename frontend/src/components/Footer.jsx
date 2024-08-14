import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h2>Our Locations</h2>
        <ul>
          <li>
            <strong>Location 1:</strong> 123 Main Street, Madurai-625598
            <br />
            <strong>Contact:</strong> 9524984069
          </li>
          <li>
            <strong>Location 2:</strong> Oppanakara street,Coimbatore-616623
            <br />
            <strong>Contact:</strong> 8015150860
          </li>
          <li>
            <strong>Location 3:</strong>Theni road,Cumbum-625516
            <br />
            <strong>Contact:</strong> 9787750563
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
