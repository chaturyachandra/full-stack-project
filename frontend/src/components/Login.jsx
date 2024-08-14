

import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Context } from './GlobeData';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const { isAdmin, loggedIn, LogOut, LogIn } = useContext(Context);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("hi");
      const response = await axios.post('http://localhost:8080/api/users/login', {
        username: formData.username,
        password: formData.password,
      });
      localStorage.setItem('userUsername', formData.username);

      console.log('Login response:', response.data.user.role);
      console.log('Login response:', response.data.user.username);
      console.log('Login response:', response.data.user.email);

      const role = response.data.user.role;
      LogIn(response.data.user);

      navigate('/Homepage');
    } catch (error) {
      console.error('There was an error making the request:', error);
      setErrors({ general: 'Username or Password is incorrect' });
    }
  };

  return (
    <div className="LoginPage">
      <div className="LoginImage"></div>
      <div className="LoginContainer">
        <div style={styles.contentWrap}>
          <div style={styles.container}>
            <div style={styles.card}>
              <h1 style={styles.title}>Monkey Mart</h1>
              <h2 style={styles.heading}>Login</h2>
              <form onSubmit={handleSubmit}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Username</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    style={styles.input}
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>Password</label>
                  <div style={styles.passwordContainer}>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      style={styles.input}
                    />
                    <i
                      onClick={() => setShowPassword(!showPassword)}
                      className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.passwordIcon}`}
                      aria-hidden="true"
                    ></i>
                  </div>
                </div>

                <button type="submit" style={styles.submitButton}>
                  Login
                </button>
                <br />
                <br />
                <div>
                  Create a new account? <Link to='/signup'>Sign up here</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  contentWrap: {
    flex: '1',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  card: {
    width: '100%',
    maxWidth: '400px',
    padding: '20px',
    boxShadow: '0px 0px 15px rgba(0, 0, 0, 1)',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    color: '#333',
  },
  input: {
    width: 'calc(100% - 30px)',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    paddingRight: '30px',
  },
  submitButton: {
    width: '100%',
    padding: '15px',
    fontSize: '18px',
    color: '#fff',
    backgroundColor: 'blueviolet',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  error: {
    marginTop: '5px',
    color: 'red',
    fontSize: '14px',
  },
  passwordContainer: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
  passwordIcon: {
    position: 'absolute',
    right: '10px',
    cursor: 'pointer',
    fontSize: '20px',
  },
};

export default Login;

// import React, { useContext, useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Login.css';
// import axios from 'axios';
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Context } from './GlobeData';
// const Login = () => {
  
//   const [formData, setFormData] = useState({
//     username: '',
//     password: '',

//   });

//   const [errors, setErrors] = useState({});
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const {isAdmin,loggedIn,LogOut,LogIn}=useContext(Context);
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

  

  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // const newErrors = validateForm();
   
//       try {
//         console.log("hi");
//         const response = await axios.post('http://localhost:8080/api/users/login', {
//             username: formData.username,
//           password: formData.password,
//         });
//         localStorage.setItem('userUsername', formData.username);
//         // Logging the response to check its format
//         console.log('Login response:', response.data.user.role);
//         console.log('Login response:', response.data.user.username);

//         console.log('Login response:', response.data.user.email);
//         // Assuming the role is returned in the response data object
//         const role = response.data.user.role;
//         LogIn(response.data.user)
        
//           navigate('/Homepage');
//       } catch (error) {
//         console.error('There was an error making the request:', error);
//         setErrors({ general: 'Username or Password is incorrect' });
//       }
    
//   };


//   return (
//     <div className="LoginPage">
//       <div className="LoginImage">
       
//       </div>
//       <div className="LoginContainer">
//       <div style={styles.contentWrap}>
//         <div style={styles.container}>
//           <div style={styles.card}>
//             <h1 style={styles.title}>Monkey Mart</h1>
//             <h2 style={styles.heading}>Login</h2>
//             <form onSubmit={handleSubmit}>
//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Username</label>
//                 <input
//                   type="text"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   style={styles.input}
//                 />
                
//               </div>

//               <div style={styles.formGroup}>
//                 <label style={styles.label}>Password</label>
//                 <div style={styles.passwordContainer}>
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     style={styles.input}
//                   />
//                   <i
//                     onClick={() => setShowPassword(!showPassword)}
//                     // className={fa ${showPassword ? 'fa-eye-slash' : 'fa-eye'} ${styles.passwordIcon}}
//                     aria-hidden="true"
//                   ></i>
//                 </div>
               
//               </div>

//               <button type="submit" style={styles.submitButton}>
//                 Login
//               </button>
//               <br></br>
//               <br></br>
//               <div>
//                 Create a new account? <Link to='/signup'>Sign up here</Link>
//               </div>
//             </form>
//           </div>
//         </div>
        
//       </div>
     
     
//       </div>
//     </div>
//   );
// };
// const styles = {
//   pageContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     minHeight: '100vh',
//   },
//   contentWrap: {
//     flex: '1',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: '20px',
//     // backgroundColor: '#f0f0f0',
//   },
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   card: {
//     width: '100%',
//     maxWidth: '400px',
//     padding: '20px',
//     boxShadow: '0px 0px 15px rgba(0, 0, 0, 1)',
//     borderRadius: '8px',
//     backgroundColor: '#fff',
//   },
//   heading: {
//     marginBottom: '20px',
//     fontSize: '24px',
//     color: '#333',
//   },
//   formGroup: {
//     marginBottom: '20px',
//   },
//   label: {
//     display: 'block',
//     marginBottom: '5px',
//     fontSize: '16px',
//     color: '#333',
//   },
//   input: {
//     width: 'calc(100% - 30px)',
//     padding: '10px',
//     fontSize: '16px',
//     border: '1px solid #ccc',
//     borderRadius: '4px',
//     paddingRight: '30px',
//   },
//   submitButton: {
//     width: '100%',
//     padding: '15px',
//     fontSize: '18px',
//     color: '#fff',
//     backgroundColor:'blueviolet',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
//   error: {
//     marginTop: '5px',
//     color: 'red',
//     fontSize: '14px',
//   },
//   passwordContainer: {
//     position: 'relative',
//     display: 'flex',
//     alignItems: 'center',
//   },
//   passwordIcon: {
//     position: 'absolute',
//     right: '10px',
//     cursor: 'pointer',
//     fontSize: '20px',
//   },
// };
// export default Login;
