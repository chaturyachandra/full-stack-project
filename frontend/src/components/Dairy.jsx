import React, { useContext } from 'react';
import './Dairy.css';
import { Cheese,GheeImage, Milk, PaneerImage } from './Datas';
import { CartContext } from './CartContext';
import { Context } from './GlobeData';
import { getById, postCartData } from '../Api';

const Dairy = () => {
  // const { addToCart } = useContext(CartContext);
  const { isAdmin,Update,userData} = useContext(Context);


  const products = [
    {
      productId: 5,
      productName: 'Milk',
      productPrice:30,
      productType:'Dairy',
      productQuantity:20,
      image:Milk, 
      // id: 1,
      // name: 'Milk',
      // image: Milk,
      // rating: 4.5,
      // price:30,
    },
    {
      productId: 6,
      productName: 'Cheese',
      productPrice:60,
      productType:'Dairy',
      productQuantity:50,
      image:Cheese, 
      // id: 2,
      // name: 'Cheese',
      // image:Cheese, 
      // rating: 4.7,
      // price:50,
    },
    {
      productId: 7,
      productName: 'Ghee',
      productPrice:110,
      productType:'Dairy',
      productQuantity:60,
      image:GheeImage 
      // id: 3,
      // name: 'Ghee',
      // image:GheeImage,
      // rating: 4.3,
      // price:120,
    },
    {
      productId: 8,
      productName: 'Panner',
      productPrice:50,
      productType:'Dairy',
      productQuantity:100,
      image:PaneerImage, 
      // id: 4,
      // name: 'Paneer',
      // image:PaneerImage,
      // rating: 4.3,
      // price:100,
    },
  ];

//  const addToCart = (product) => {
//     setCart((prevCart) => {
//       const existingProduct = prevCart.find((item) => item.id === product.id);
//       if (existingProduct) {
//         return prevCart.map((item) =>
//           item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//         );
//       } else {
//         return [...prevCart, { ...product, quantity: 1 }];
//       }
//     });
//   }; 
const addToCart=async (products)=>{
  if(!isAdmin)
    {
      await postCartData(userData.cart,products,1)
      const res=await getById(userData.id)
      await Update(res.data);

    }
    else
    {
      alert("u are an admin");
    }
 }

  return (
    <div className='dairy_page'>
      <div className="dairy_image">
        {/* <img src="path/to/your/dairy-main-image.jpg" alt="Dairy Products" /> Replace with actual path */}
      </div>
      <div className="dairy_description">
        {products.map((product) => (
          <div className="dairy_product" key={product.productId}>
            <img src={product.image} alt={product.productName} />
            <h2>{product.productName}</h2>
            {/* <p>Rating: {product.rating} ⭐</p> */}
            <p>Price:₹{product.productPrice}</p>
            {isAdmin ? "" :<button onClick={()=>{addToCart(product)}}>Add to Cart</button>}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Dairy;
