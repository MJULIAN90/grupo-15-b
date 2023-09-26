import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

//  Cuando en nuestra carpeta tenemos un archivo llamado index.js, no hace falta especificar el nombre del archivo, ya que por defecto, si no se especifica, se importa el index.js
import Cards from "./components/Cards";
import Nav from "./components/Nav";
// import SearchBar from "./components/SearchBar";
// import characters from './data.js';

import "./App.css";
import About from "./components/About";
import Detail from "./components/Details";
import Form from "./components/Form";

const access = {
  email: 'prueba@hola.com',
  password: '123456',
  isLoged: false,
}

function App() {
  // si quisieramos usar un custom hook, lo llamariamos asi:
  // const {
  //   characters,
  //   onSearch,
  //   onClose,
  //   random,
  //   login,
  //   logout,
  //   pathname,
  // } = useApp();

  const { pathname } =  useLocation();
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

  return (
    <div className='App'>
      {pathname !== '/' && <Nav onSearch={onSearch} logout={logout} /> }
      {/* <Cards 
         characters={characters} 
         onClose={onClose}
      /> */}
      <Routes>
        <Route path='/' element={<Form loginUser={login} />} />
        <Route path='/home' 
          element={
            <Cards characters={characters} onClose={onClose} />
          }
        />
        <Route path='/about' element= { <About />} />
        <Route path="/detail/:id" element={<Detail /> } />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
