import axios from "axios";

const API_URL = "http://localhost:8080";

export const getData = async () => {
  return await axios.get(`${API_URL}/api/users/profile`);
};

export const postData = async (
  username,
  email,
  password,
  // conpassword,
  uRole
) => {
    const { data: edata } = await getData();

    const newid = Math.max(...edata.map((user) => user.id), 0) + 1;

    const newdata = {
      id: newid,
      username: username,
      email: email,
      password: password,
      // confirmPassword: conpassword,
      role: uRole,
    };
    try{
      console.log(newdata);
    await axios.post(`${API_URL}/api/users/register`, newdata);
  } catch (err) {
    console.error("Error creating new user", err);
    throw err;
  }
};

export const addCart = async (userId, updatedCart) => {
  const { data: user } = await axios.get(`${API_URL}/UserData/${userId}`);
  user.cart = updatedCart;
  return axios.put(`${API_URL}/UserData/${userId}`, user);
};

export const setNewUserPassword = async (id, updatedUser) => {
  try {
    console.log(updatedUser);
    await axios.put(`${API_URL}/supermarket/updatePassword/${id}`, updatedUser);
  } catch (error) {
    console.error("Error updating password for user id `${id}`", error);
    throw error;
  }
};

export const getById = async (id) =>{
  try{
    return await axios.get(`${API_URL}/api/users/${id}`);

  }
  catch(error)
  {
    console.error("error fetching");
    throw error;
  }
}

//employee json concept
export const getEmployeeData = async () => {
  return await axios.get(`${API_URL}/supermarket/getEmployee`);
};

export const postEmployeeData = async (name, position, salary) => {
  const { data: employee } = await getEmployeeData();

  const empnewid = Math.max(...employee.map((user) => user.id), 0) + 1;

  const newempdata = {
    employeeid: empnewid,
    employeeName: name,
    employeePosition: position,
    employeeSalary: salary,
  };

  await axios.post(`${API_URL}/supermarket/postEmployee`, newempdata);
};

export const deleteEmployeeData = async (id) => {
  await axios.delete(`${API_URL}/supermarket/deleteEmployee/${id}`);
};


//Product methods
export const getProductData = async () => await axios.get(`${API_URL}/supermarket/getProduct`);

export const postProductData = async (name,price,type,quantity) => {
  const { data: prdt } = await getEmployeeData();

  const prdtnewid = Math.max(...prdt.map((user) => user.id), 0) + 1;

  const newprdtdata = {
    productId: prdtnewid,
    productName: name,
    productPrice: price,
    productType: type,
    productQuantity: quantity,
    
  };

  await axios.post(`${API_URL}/supermarket/postProduct`, newprdtdata);
};

//cart functions

export const getCartData = async () => await axios.get(`${API_URL}/supermarket/getCart`);

export const postCartData = async (cart, product, quantity) => {
  
  console.log(cart)
  console.log(product)
  console.log(quantity)
  await axios.put(`${API_URL}/supermarket/updateCart/${cart.cartId}/${quantity}`,product)
}