import React from 'react';
import './AboutUs.css';
import { abtusSuper, TM1, TM2, TM3 } from './Datas';

const AboutUs = () => {
  return (
    <div className='aboutus-container'>
      <div className='aboutus-header'>
        <h1>About Monkey Mart</h1>
        <p>Your trusted neighborhood supermarket</p>
        <img src={abtusSuper} alt="Supermarket" className="supermarket-image" />
      </div>

      <div className='aboutus-content'>
        <section className='mission'>
          <h2>Our Mission</h2>
          <p>At Monkey Mart, our mission is to provide our community with high-quality, fresh, and affordable groceries. We strive to create a welcoming shopping experience for our customers, offering a wide variety of products that cater to the diverse needs of our neighborhood.</p>
        </section>

        <section className='vision'>
          <h2>Our Vision</h2>
          <p>We envision a future where Monkey Mart is the go-to destination for all grocery needs in the area. We aim to continuously innovate and expand our offerings, ensuring that our customers always have access to the best products at competitive prices.</p>
        </section>

        <section className='values'>
          <h2>Our Values</h2>
          <ul>
            <li><strong>Quality:</strong> We are committed to providing products that meet the highest standards of quality and freshness.</li>
            <li><strong>Customer Service:</strong> Our customers are at the heart of everything we do. We prioritize their satisfaction and strive to exceed their expectations.</li>
            <li><strong>Community:</strong> We are dedicated to giving back to our community and supporting local initiatives and businesses.</li>
            <li><strong>Sustainability:</strong> We aim to reduce our environmental footprint by promoting sustainable practices and offering eco-friendly products.</li>
          </ul>
        </section>

        <section className='history'>
          <h2>Our History</h2>
          <p>Founded in 1995, Monkey Mart started as a small family-owned store with a mission to serve the local community with quality groceries at affordable prices. Over the years, we have grown to become a beloved neighborhood staple, expanding our offerings and enhancing the shopping experience. Our journey has been fueled by our dedication to customer satisfaction and our commitment to community values.</p>
        </section>

        <section className='testimonials'>
          <h2>Customer Testimonials</h2>
          <div className='testimonial'>
            <p>"Monkey Mart has been my go-to grocery store for years. The quality of their products and the friendliness of their staff are unmatched." - Sarah L.</p>
          </div>
          <div className='testimonial'>
            <p>"I love shopping at Monkey Mart. They always have what I need, and their prices are unbeatable. Plus, I feel good knowing I'm supporting a business that gives back to the community." - Mark T.</p>
          </div>
          <div className='testimonial'>
            <p>"The best supermarket in the area! The fresh produce is top-notch, and the staff are always helpful and courteous." - Emily R.</p>
          </div>
        </section>

        <section className='team'>
          <h2>Meet Our Team</h2>
          <div className='team-members'>
            <div className='team-member'>
              <img src={TM1} alt="John Doe" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className='team-member'>
              <img src={TM2} alt="Jane Smith" />
              <h3>Jane Smith</h3>
              <p>Chief Operating Officer</p>
            </div>
            <div className='team-member'>
              <img src={TM3} alt="Michael Brown" />
              <h3>Michael Brown</h3>
              <p>Head of Marketing</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
