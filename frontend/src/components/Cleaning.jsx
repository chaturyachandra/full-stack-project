// Cleaning.js
import React, { useContext } from 'react';
import './Cleaning.css';
import { DettolImage, DomexImage, HarpicImage, LizolImage, Milk } from './Datas';
import { Context } from './GlobeData';
import { getById, postCartData } from '../Api';

const Cleaning = () => {
  // const { addToCart } = useContext(CartContext);
  const { isAdmin,Update,userData} = useContext(Context);

  const products = [
    {
      productId: 9,
      productName: 'Harpic Cleaner',
      productPrice:120,
      productType:'Cleaner',
      productQuantity:20,
      image:HarpicImage, 
      // id: 1,
      // name: 'Harpic Cleaner',
      // image: HarpicImage, 
      // rating: 4.8,
      // price:120,
    },
    {
      productId: 10,
      productName: 'Lizol cleaner',
      productPrice:80,
      productType:'Cleaner',
      productQuantity:10,
      image:LizolImage, 
      // id: 2,
      // name: 'Lizol Cleaner',
      // image: LizolImage, 
      // rating: 4.7,
      // price:85,
    },
    {
      productId: 11,
      productName: 'Dettol',
      productPrice:90,
      productType:'Cleaner',
      productQuantity:20,
      image:DettolImage, 
      // id: 3,
      // name: 'Dettol Cleaner',
      // image: DettolImage, 
      // rating: 4.6,
      // price:50,
    },
    {
      productId: 12,
      productName: 'Vim',
      productPrice:40,
      productType:'Cleaner',
      productQuantity:80,
      image:Milk, 
    }
  ];
  
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
    <div className='cleaning_page'>
      <div className="Domex_Image">
        <img src={DomexImage} alt="Domex Cleaning" />
      </div>
      <div className="cleaning_description">
        {products.map((product) => (
          <div className="cleaning_product" key={product.productId}>
            <img src={product.image} alt={product.productName} />
            <h2>{product.productName}</h2>
            <p>Price:₹{product.productPrice}</p>
            {isAdmin ? "" :<button onClick={()=>{addToCart(product)}}>Add to Cart</button>}
            </div>
        ))}
      </div>
    </div>
  );
};

export default Cleaning;
