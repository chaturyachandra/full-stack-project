// // Cart.js
// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CartContext } from './CartContext';
// import './Cart.css';
// import axios from 'axios';
// import { Context } from './GlobeData';

// const Cart = () => {
//   const { userData } = useContext(Context);
//   const navigate = useNavigate();
//   const [cart, setCart] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const handlePayment = () => {
//     navigate('/payment', { state: { totalAmount: calculateTotalAmount() } });
//   };

//   const calculateTotalAmount = () => {
//     return cart.reduce((total, item) => total + item.productPrice * item.productQuantity, 0);
//   };

//   useEffect(() => {
//     const fetchCart = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/api/users/${userData.id}`);
//         setCart(response.data.cart.productList);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching cart data:', error);
//         setLoading(false);
//       }
//     };
//     fetchCart();
//   }, [cart]);

//   const clearCart = async () => {
//     try {
//       await axios.delete(`http://localhost:8080/api/users/delete/${userData.id}`);
//       const resp = await axios.get(`http://localhost:8080/api/users/${userData.id}`);
//         setCart(resp.data.cart.productList);
//     } catch (error) {
//       console.error('Error clearing cart:', error);
//     }
//   };

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="cart">
//       <h2>Shopping Cart</h2>
//       {cart.length === 0 ? (
//         <p>Your cart is empty</p>
//       ) : (
//         <>
//           <ul>
//             {cart.map((item) => (
//               <li key={item.productId}>
//                 {item.productName} - Quantity: {item.productQuantity} - Amount: ₹{item.productPrice * item.productQuantity}
//               </li>
//             ))}
//           </ul>
//           <p>Total Amount: ₹{calculateTotalAmount()}</p>
//           <button onClick={clearCart}>Clear Cart</button>
//           <button onClick={handlePayment}>Proceed to Payment</button>
//         </>
//       )}
//     </div>
//   );
// };

// export default Cart;

//-------------------------------------
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from './CartContext';
import './Cart.css';
import axios from 'axios';
import { Context } from './GlobeData';

const Cart = () => {
  const { userData } = useContext(Context);
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const handlePayment = () => {
    navigate('/payment', { state: { totalAmount: calculateTotalAmount() } });
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => total + item.productPrice * item.productQuantity, 0);
  };

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/users/${userData.id}`);
        setCart(response.data.cart.productList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching cart data:', error);
        setLoading(false);
      }
    };
    fetchCart();
  }, [userData.id]);

  const clearCart = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/users/delete/${userData.id}`);
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const updateCartQuantity = async (productId, quantity) => {
    try {
      const response = await axios.put(`http://localhost:8080/api/users/${userData.id}/cart`, {
        productId,
        quantity,
      });
      setCart(response.data.cart.productList);
    } catch (error) {
      console.error('Error updating cart quantity:', error);
    }
  };

  const handleIncrement = (productId) => {
    const item = cart.find((item) => item.productId === productId);
    if (item) {
      updateCartQuantity(productId, item.productQuantity + 1);
    }
  };

  const handleDecrement = (productId) => {
    const item = cart.find((item) => item.productId === productId);
    if (item && item.productQuantity > 1) {
      updateCartQuantity(productId, item.productQuantity - 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.productId}>
                {item.productName} - Quantity: {item.productQuantity} - Amount: ₹{item.productPrice * item.productQuantity}
                <button onClick={() => handleDecrement(item.productId)}>-</button>
                <button onClick={() => handleIncrement(item.productId)}>+</button>
              </li>
            ))}
          </ul>
          <p>Total Amount: ₹{calculateTotalAmount()}</p>
          <button onClick={clearCart}>Clear Cart</button>
          <button onClick={handlePayment}>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Cart;
