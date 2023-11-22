import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// Ensure axiosInstance is imported
import axiosInstance from '../Axiosinterceptor';

const Empform = (props) => {

  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: props.data ? props.data.name : '',
    designation: props.data ? props.data.designation : '',
    location: props.data ? props.data.location : '',
    salary: props.data ? props.data.salary : '' // Add password field to the form state
  });

  const [errors, setErrors] = useState({});

  const inputHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!form.designation.trim()) {
      newErrors.designation = 'Designation is required';
    }
    if (!form.location.trim()) {
      newErrors.location = 'Location is required';
    }
    if (!form.salary.trim()) {
      newErrors.salary = 'Salary is required';
    }
    

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

   
  function add() {
    if(props.method==="put"){
      axiosInstance.put("http://localhost:3003/edit/"+props.data._id,form)
      .then((response)=>{
       
        if (response.data==="Updated successfully") {
         alert(response.data)
          window.location.reload(false);
    
          
        } else {
          alert("not updated")
        }
      })}

    else{
      if (validateForm()) {
    axiosInstance.post('http://localhost:3003/add', form)
      .then((res) => {
        alert(res.data);
        navigate('/view');
      })
    }}
  
  

}


  return (
    <div style={{ margin: '7% 10% 10%', textAlign: 'center' }}>
      <Typography variant='h3' style={{ color: 'purple' }}>
        Add Employee
      </Typography>
      <br /><br /> <br />
      <TextField
  variant='outlined'
  label="Name"
  onChange={inputHandler}
  name='name'
  value={form.name}
  error={Boolean(errors.name)} // Check for the 'name' error
  helperText={errors.name} // Display the 'name' error message
/>
<br /><br /> <br />
<TextField
  variant='outlined'
  label="Designation"
  onChange={inputHandler}
  name='designation'
  value={form.designation}
  error={Boolean(errors.designation)} // Check for the 'designation' error
  helperText={errors.designation} // Display the 'designation' error message
/>
<br /><br /> <br />
<TextField
  variant='outlined'
  label="Location"
  onChange={inputHandler}
  name='location'
  value={form.location}
  error={Boolean(errors.location)} // Check for the 'location' error
  helperText={errors.location} // Display the 'location' error message
/>
<br /><br /> <br />
<TextField
  variant='outlined'
  label="salary"
  onChange={inputHandler}
  name='salary'
  value={form.salary}
  error={Boolean(errors.salary)} // Check for the 'salary' error
  helperText={errors.salary} // Display the 'salary' error message
/>
<br /><br /> <br />


      {/* <TextField variant='outlined' label="Email" onChange={inputHandler} name='email' value={form.email} />
      <br /><br /> <br />
      <TextField variant='outlined' label="Password" onChange={inputHandler} name='password' value={form.password} type='password' />
      <br /><br /> <br /> */}
      <Button variant='contained' color='secondary' onClick={add}>Add</Button>
    </div>
  );
};

export default Empform;
