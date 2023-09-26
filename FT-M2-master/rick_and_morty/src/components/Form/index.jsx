import React, { useEffect, useState } from "react";
import { validator } from "./validations";
import { Button, Input, Title } from "../../styles";

const Form = ({loginUser}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [userData, setData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleOnchange = (e) => {
    setData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors (validator({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSumit = (e) => {
    e.preventDefault();

    loginUser(userData);
  };

  useEffect(() => {
    console.log('useEffect error', errors);
  },[errors])
  

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      width: '20%',
      height: '100vh',
    }}>
      <form 
        onSubmit={handleSumit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 20,
          width: '100%',
      }}
        >
        <Title htmlFor='email'>Email</Title>
        <Input
          type='text'
          name='email'
          placeholder='Email'
          value={userData.email}
          // onChange={(e) => handleOnchange(e)}
          onChange={handleOnchange}
        />

        {errors.email && <p>{errors.email}</p>}

        <Title htmlFor='password'>password</Title>
        <Input
          type='password'
          name='password'
          placeholder='password'
          value={userData.password}
          // onChange={(e) => handleOnchange(e)}
          onChange={handleOnchange}
        />

        {errors.password && <p>{errors.password}</p>}

        <Button type='sumit'>Submit</Button>
      </form>
    </div>
  );
};

export default Form;
