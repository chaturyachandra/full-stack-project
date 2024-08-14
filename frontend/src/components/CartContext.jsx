// CartContext.js
import React, { createContext, useState,useContext } from 'react';
import { Context } from './GlobeData';
import { getById, postCartData } from '../Api';
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const {loggedIn,isAdmin} = useContext(Context);
  const {userdata,Update}=useContext(Context);
  
  const addToCart = async (product) => {
    console.log(!loggedIn+'status');
    if (!loggedIn) {
      alert('Please login to add items to cart.');
      return;
    }
    else
    {
        // setCart((prevCart) => {
        //   const existingProduct = prevCart.find((item) => item.id === product.id);
        //   if (existingProduct) {
        //     return prevCart.map((item) =>
        //       item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        //     );
        //   } else {
        //     return [...prevCart, { ...product, quantity: 1 }];
        //   }
        // });
        if(!isAdmin)
        {
          await postCartData(userdata.cart,product,1)
          const res=await getById(userdata.id)
          await Update(res.data);
   
        }
        else
        {
          alert("u are an admin");
        }
    }
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
