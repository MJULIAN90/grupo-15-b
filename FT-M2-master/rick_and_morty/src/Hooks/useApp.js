import axios from 'axios';
import { useEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

const access = {
  email: 'prueba@hola.com',
  password: '123456',
  isLoged: false,
}

const useApp = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    // unary operator
    const find = characters.find((character) => character.id === +id);
    console.log('find ', find);
    if (find) return window.alert("¡Este personaje ya fue agregado!");

    // Con axios
    try {
      // con promesas lo que hace el codigo es ejecutar la promesa y cuando se resuelve, ejecuta el then y seguiria ejecutando el codigo siguiente
      //  axios(`https://rickandmortyapi.com/api/character/${id}`)
      //     .then(({ data }) => {
      //        if (data.name) {
      //           setCharacters((oldChars) => [...oldChars, data]);
      //        } else {
      //           window.alert("¡No hay personajes con este ID!");
      //        }
      //     }
      //     );
      // ejecuta el console.log sin importar la respuesta de la promesa
      // console.log('hola');

      // con async await
      // con el async await, lo que hace es ejecutar la promesa y cuando se resuelve, ejecuta el codigo siguiente
      const response = await axios(`https://rickandmortyapi.com/api/character/${id}`);
      const data = response.data;

      // No lo ejecuta hasta que tenga la respuesta de la promesa
      // console.log('hola');

      if (data.name) {
        setCharacters([...characters, data]);
        // setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }

    } catch (error) {
      console.log('error en api ', error);
    }
    // Con fetch
  };

  const onClose = (id) => {
    // Forma larga
    // const response = characters.filter((character) => character.id !== id);
    // setCharacters(response);

    // Forma corta
    setCharacters(characters.filter((character) => character.id !== id));
  }

  const random = () => {
    const randomId = Math.floor(Math.random() * 825) + 1;
    onSearch(randomId);
  };

  const login = (data) => {
    console.log('login', data);

    if (data.email === access.email && data.password === access.password) {
      access.isLoged = true;
      navigate('/home');
    } else {
      window.alert('Usuario o contraseña incorrectos');
    }
  }

  const logout = () => {
    access.isLoged = false;
    navigate('/');
  }

  useEffect(() => {
    !access.isLoged && navigate('/');
  }, [access, navigate]);


  return {
    characters,
    onSearch,
    onClose,
    random,
    login,
    logout,
    pathname,
  }
}

export default useApp;