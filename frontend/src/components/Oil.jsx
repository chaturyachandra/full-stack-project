import React, { useContext, useEffect, useState} from 'react';
import './Oil.css';
 import { OI1, OI2, OI3, OI4 } from './Datas';
import { Context } from './GlobeData';
import { getById, getProductData, postCartData } from '../Api';
// import oil-image6 from 'D:/App development/loginapp/src/Images/oil-image6.webp';

const Oil = () => {
  // const { addToCart } = useContext(CartContext);
  const { isAdmin,Update,userData} = useContext(Context);
  // const [productName,setProductName] = useState('');
  // const [productImage,setProductImage] = useState('');
  // const [productPrice,setProductPrice] = useState('');
  // const [productType,setProductType] = useState('');
  // const [productQuantity,setProductQuantity] = useState('');
  // const [products, setPrdt] = useState([]);


  // useEffect(() => {
  //   const fetch= async() => {
  //         const prdt=await getProductData();
  //         console.log(prdt);
  //         setPrdt(prdt.data);
  //       };
  //       fetch();
  // },[]);

  const products = [
    {
      productId: 1,
      productName: 'Gingelly oil',
      productPrice:100,
      productType:'Oil',
      productQuantity:20,
      image:OI1, 
      
    },
    {
      productId: 2,
      productName: 'Coconut oil',
      productPrice:220,
      productType:'Oil',
      productQuantity:35,
      image:OI2
      // id: 2,
      // name: 'Coconut Oil',
      // image: OI2, 
      // rating: 4.7,
      // price:60,
      
    },
    {
      productId: 3,
      productName: 'Sunflower oil',
      productPrice:220,
      productType:'Oil',
      productQuantity:150,
      image:OI3
      // id: 3,
      // name: 'Sunflower Oil',
      // image:OI3, 
      // rating: 4.3,
      // price:210,
    },
    {
      productId: 4,
      productName: 'Mustard oil',
      productPrice:150,
      productType:'Oil',
      productQuantity:150,
      image:OI4
      // id: 4,
      // name: 'Mustard oil',
      // image:OI4, 
      // rating: 4.3,
      // price:150,
    },
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

      <div className='oil_page'>
        <p></p>
        <br />
        <br />
        <div className="oil_image"></div>
        <div className="oil_description">
          {products?.map((product) => (
            // product.productType === 'Oil' ? (
              <div className="oil_product" key={product.productId}>
                <img src={product.image} alt={product.productName} />
                <h2>{product.productName}</h2>
                <p>Price: ₹{product.productPrice}</p>
                {/* <p>Quantity: {product.productQuantity}</p> */}
                {isAdmin ? "" : <button onClick={() => { addToCart(product) }}>Add to Cart</button>}
              </div>
            // ) : null
          ))}
        </div>
      </div>
    );
    
  }
export default Oil;
