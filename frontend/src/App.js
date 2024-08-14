import './App.css';
import HomePage from './components/HomePage';

import Login from './components/Login';
import Signup from './components/Signup';
import React, { useContext } from 'react';
import { Routes, Route, useLocation } from'react-router-dom';
import Navbar from './components/Navbar';
import Oil from './components/Oil';
import Cart from './components/Cart';
import AboutUs from './components/AboutUs';
import Dairy from './components/Dairy';
import Cleaning from './components/Cleaning';
import Footer from './components/Footer';
import ProfilePage from './components/Profile';
import Employee from './components/Employee';
import { Context } from './components/GlobeData';
import NoAccess from './components/NoAccess';
import Payment from './components/Payment';
import Order from './components/Order';

function App() {
  const curr_loc=useLocation();
  const array=['/Login','/signup'];
  const nav=array.includes(curr_loc.pathname);
  const { loggedIn, isAdmin} = useContext(Context);

    return (
    <div className="App">
      {!nav && <Navbar/>}
      <header className="App-header">
        <Routes> 
          <Route path ="/" exact element={<HomePage/>}></Route>
          <Route path ="/Signup" exact element={<Signup/>}></Route> 
          <Route path ="/Login" exact element={<Login/>}></Route> 
          <Route path ="/HomePage" exact element={<HomePage/>}></Route>
          <Route path ="/Oil" exact element={<Oil/>}></Route>
          <Route path ="/AboutUs" exact element={<AboutUs />}></Route>
          <Route path ="/shop" exact element={<shop/>}></Route>
          <Route path ="/Dairy" exact element={<Dairy/>}></Route>
          <Route path ="/Cleaning" exact element={<Cleaning/>}></Route>
          <Route path ="/Payment" exact element={<Payment/>}></Route>
          {loggedIn? (
            <>
            {isAdmin ? (
              <Route path ="/Employee" exact element={<Employee/>}></Route>
            ):(
              <Route path ="/Cart" exact element={<Cart/>}></Route>
            )}
            <Route path ="/Profile" exact element={<ProfilePage/>}></Route>
            <Route path ="/Order" exact element={<Order/>}></Route>
          </>
          ):(<Route path ="*" exact element={<NoAccess/>}></Route>)}
        </Routes>
      {!nav && <Footer/>}
      </header>
    </div>

  );
}

export default App;
