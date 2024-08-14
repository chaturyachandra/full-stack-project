import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
   const navigate = useNavigate();
   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const [email, setEmail] = useState('');
   const [confirmPassword, setConfirmPassword] = useState('');
   const [role, setRole] = useState('User'); // Default role is User

   const handleUsernameChange = (e) => {
      setUsername(e.target.value);
   };

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
   };

   const handleConfirmPasswordChange = (e) => {
      setConfirmPassword(e.target.value);
   };

   const handleSignup = async (event) => {
      event.preventDefault();
      if (username === '' || password === '' || email === '' || confirmPassword === '') {
         alert('All fields are required');
         return;
      }
      if (password !== confirmPassword) {
         alert('Passwords do not match');
         return;
      }

      const user = {
         username,
         email,
         password,
         role
      };

      try {
         const response = await axios.post('http://localhost:8080/api/users/register', user);
         alert('User registered successfully');
         navigate('/Login');
      } catch (error) {
         console.error('Error during registration:', error.response.data);
         alert('Error during registration: ' + error.response.data);
      }
   };

   return (
      <div className="signup_page">
         <div className="signup_image"></div>
         <div className="signup_container">
            <h1>Signup</h1>
            <div className="signup_form_div">
               <form className="signup_form" onSubmit={handleSignup}>
                  <label>Username</label>
                  <input type="text" placeholder="Enter Username" onChange={handleUsernameChange} />
                  
                  <label>Email</label>
                  <input type="email" placeholder="Enter Email" onChange={handleEmailChange} />
                  
                  <label>Password</label>
                  <input type="password" placeholder="Enter Password" onChange={handlePasswordChange} />
                  
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Enter Confirm Password" onChange={handleConfirmPasswordChange} />
                  
                  <button type="submit">Sign Up</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export default Signup;

// import React, { useState } from 'react';
// import './Signup.css';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     role:'user'
    
//   });
//   const navigate = useNavigate();
//   const [username, setUsername] = React.useState('');
//   const [password, setPassword] = React.useState('');
//   const [email, setEmail] = React.useState('');
//   const [confirmPassword, setConfirmPassword] = React.useState('');
//   const [role, setRole] = React.useState('User'); // Default role is User

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleConfirmPasswordChange = (e) => {
//     setConfirmPassword(e.target.value);
//   };
   

//   const handleSignup = async(event) => {
//     event.preventDefault();
//     if (username === '' || password === '' || email === '' || confirmPassword === '') {
//       alert('All fields are required');
//       return;
//     }
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//       return;
//     }
//     // console.log(username, password, email, confirmPassword);
   
//     try {
      
//       const response = await axios.post('http://localhost:8080/api/users/register', formData);
//       console.log({role});
//       setFormData({
//         username: '',
//         email: '',
//         password: '',
//         confirmPassword: '',
//         role:'user'
      
//       });
//       console.log("bye");
//      navigate("/login")
     
//     } catch (error) {
//       console.log('Error signing up', error);
      
//     }
//     alert('Successfully registered');
   
//   };

//   return (
//     <div className="signup_page">
//       <div className="signup_image"></div>
//       <div className="signup_container">
//         <h1>Signup</h1>
//         <div className="signup_form_div">
//           <form className="signup_form" onSubmit={handleSignup}>
            
//             <label>Username</label>
//             <input type="text" placeholder="Enter Username" onChange={handleUsernameChange} />
            
//             <label>Email</label>
//             <input type="email" placeholder="Enter Email" onChange={handleEmailChange} />
            
//             <label>Password</label>
//             <input type="password" placeholder="Enter Password" onChange={handlePasswordChange} />
            
//             <label>Confirm Password</label>
//             <input type="password" placeholder="Enter Confirm Password" onChange={handleConfirmPasswordChange} />
            
//             <button type="submit">Sign Up</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;
