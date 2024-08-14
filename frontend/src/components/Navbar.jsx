import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HomePage from './HomePage';
import AboutUs from './AboutUs';
import Cart from './Cart';
import './Navbar.css';
import { Context } from './GlobeData';
import { monkeyicon } from './Datas';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { loggedIn, isAdmin, LogOut } = useContext(Context);
  const [page, setPage] = useState('');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const onhandleHome = (event) => {
    event.preventDefault();
    navigate("/HomePage");
  }
  const onhandleAboutus = (event) => {
    event.preventDefault();
    navigate("/AboutUs");
  }
  const onhandleCart = (event) => {
    event.preventDefault();
    navigate("/Cart");
  }
  const onhandleLogin = (event) => {
    event.preventDefault();
    navigate("/Login");
  }
  const onhandleDropdown = (event) => {
    const selectedPage = event.target.value;
    setPage(selectedPage);
    if (selectedPage === 'Oil') {
      navigate('/Oil');
    } else if (selectedPage === 'Dairy') {
      navigate('/Dairy');
    } else if (selectedPage === 'Cleaning') {
      navigate('/Cleaning');
    }
  };

  const toggleProfileDropdown = () => {
    setShowProfileDropdown(prevState => !prevState);
  };

  const handleProfile = () => {
    navigate('/Profile');
    setShowProfileDropdown(false);
  };
  const onhandleEmployee = (event) => {
    event.preventDefault();
    navigate("/Employee");
  }
  const handleOrder = () => {
    navigate("/Order");
  }
  return (
    <>
      <div className='Navbar_main'>
        <div className='title'>
          <div className='icon'>
            <img src={monkeyicon} alt="logo" />
          </div>
          <h1>Monkey Mart</h1>
        </div>
        {isAdmin ? (<>
                <button onClick={onhandleHome}>Home</button>
          <button onClick={onhandleEmployee}>Employees</button>
            </> ) : 
        
        (<>
        <button onClick={onhandleHome}>Home</button>
        <button onClick={onhandleAboutus}>About Us</button>
        {loggedIn ? <button onClick={onhandleCart}>Cart</button> : ""}</>)}
        <select onChange={onhandleDropdown}>
          <option value="" selected hidden>Categories</option>
          <option value="Oil">Oil</option>
          <option value="Dairy">Dairy</option>
          <option value="Cleaning">Cleaning</option>
        </select>
        {loggedIn ? "" : <button onClick={onhandleLogin}>Login</button>}
        {loggedIn ? <i className="fa fa-user profile-icon" aria-hidden="true" onClick={toggleProfileDropdown}></i> : ""}
      </div>
      {showProfileDropdown && loggedIn && (
        <div className='profile-dropdown'>
          <button onClick={handleProfile}>Profile</button>
          <button onClick={() => { LogOut(); setShowProfileDropdown(false); }}>Logout</button>
          <button onClick={handleOrder}>Orders</button>
          {/* <button onClick={onhandleEmployee}>Employees</button> */}
        </div>
      )}
      <div>
        {page === "/HomePage" ? <HomePage /> : null}
        {page === "/AboutUs" ? <AboutUs /> : null}
        {page === "/Cart" ? <Cart /> : null}
      </div>

    </>
  )
}


export default Navbar;
