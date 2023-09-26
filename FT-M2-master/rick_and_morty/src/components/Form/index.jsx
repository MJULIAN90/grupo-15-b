import React, { useEffect, useState } from "react";
import { validator } from "./validations";

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
    <div>
      <form onSubmit={handleSumit}>
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          name='email'
          placeholder='Email'
          value={userData.email}
          // onChange={(e) => handleOnchange(e)}
          onChange={handleOnchange}
        />

        {errors.email && <p>{errors.email}</p>}

        <label htmlFor='password'>password</label>
        <input
          type='password'
          name='password'
          placeholder='password'
          value={userData.password}
          // onChange={(e) => handleOnchange(e)}
          onChange={handleOnchange}
        />

        {errors.password && <p>{errors.password}</p>}

        <button type='sumit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
