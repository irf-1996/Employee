import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



const Login = () => {
  const [user,setUser]=useState({
    email:'',
    password:'',
  });
  const navigate=useNavigate();
  
const [errors, setErrors] = useState({});
  const inputHandler=(e)=>{
      setUser({...user,[e.target.name]:e.target.value})
      setErrors({ ...errors, [e.target.name]: '' });
  }
  const validateForm = () => {
    const newErrors = {};

    if (!user.email.trim()) {
      newErrors.email = 'Email is required';
    }

    if (!user.password.trim()) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  function submit() {
    if (validateForm()) {
    axios.post('http://localhost:3003/api/login/', user)
      .then((res) => {
        alert(res.data.message);
        if (res.data.message === 'success') {
          sessionStorage.setItem("userToken", res.data.token);
          if (user.email === 'admin@gmail.com') {
            navigate('/view');
          } else {
            navigate('/userview');
            
          }
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          alert('Invalid credentials. Please try again.');
          console.error('Error during Axios request:', error);
        } else {
          console.error('Error during login:', error);
          alert('An error occurred. Please try again later.');
        }
      });
  }
}

  return (
    <div style={{ margin: '7% 10% 10%', textAlign: 'center', border: '2px solid #ccc', borderRadius: '8px', padding: '20px' }}>
      <Typography variant='h3' style={{ color: 'purple', marginBottom: '30px' }}>
        Employee App
      </Typography>

      <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <TextField
          variant='outlined'
          label='Email'
          name='email'
          onChange={inputHandler}
          style={{ width: '300px', alignSelf: 'center' }}
          
        />

        <TextField
          variant='outlined'
          label='Password'
          name='password'
          onChange={inputHandler}
          type='password'
          style={{ width: '300px', alignSelf: 'center' }}
        />

        <Button variant='contained' color='secondary' style={{ width: '150px', alignSelf: 'center' }} onClick={submit}>
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
