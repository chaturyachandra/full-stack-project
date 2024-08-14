import React from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom';
import { CI, FI, GW, MI, SI, VE } from './Datas';

const HomePage = () => {
  const navigate = useNavigate();

  const handleShopNow = () => {
    const featuredProductsSection = document.querySelector('.featured-products');
    if (featuredProductsSection) {
      featuredProductsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero-container'>
      <div className="hero-content">
        <h1>Welcome to Monkey Mart</h1>
        <p>Your one-stop shop for all your grocery needs!</p>
        <button onClick={handleShopNow} className="shop-now-btn">Shop Now</button>
      </div>
      <div className='homepage-image'>
        {/* Add any background image or content here */}
      </div>
      <div className="featured-products">
        <h2>Featured Products</h2>
        <div className="products">
          <div className="product-card">
            <img src={FI} alt="Fruits" />
            <h3>Fruits</h3>
            <p>₹10.00</p>
          </div>
          <div className="product-card">
            <img src={VE} alt="Vegetables" />
            <h3>Vegetables</h3>
            <p>₹15.00</p>
          </div>
          <div className="product-card">
            <img src={SI} alt="Spices" />
            <h3>Spices</h3>
            <p>₹20.00</p>
          </div>
        </div>
      </div>

      <div className="categories">
        <h2>Shop by Categories</h2>
        <div className="category-card" onClick={() => navigate('/Oil')}>
          <img src={GW} alt="Oil" />
          <h3>Oil</h3>
        </div>
        <div className="category-card" onClick={() => navigate('/Cleaning')}>
          <img src={CI} alt="Cleaners" />
          <h3>Cleaners</h3>
        </div>
        <div className="category-card" onClick={() => navigate('/Dairy')}>
          <img src={MI} alt="Dairy" />
          <h3>Dairy</h3>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
