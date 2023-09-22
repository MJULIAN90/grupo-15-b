import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
  const [character, setCharacter] = useState({});
  const { id } = useParams();

  useEffect(() => {
    // con promesas
    // axios(`https://rickandmortyapi.com/api/character/${id}`)
    // .then(({ data }) => {
    //   if (data.name) {
    //     console.log('data ', data);
    //     setCharacter(data);
    //   } else {
    //     window.alert('No hay personajes con ese ID');
    //   }
    // }).catch((error) => {
    //   console.log('error ', error);
    // })

    // con async await
    // IIFE
    // (async () => {
    //   try {
    //     const response = await axios(`https://rickandmortyap.com/api/character/${id}`)
    //     const data = response.data;

    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();

    // con fetch

    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          console.log("data ", data);
          setCharacter(data);
          console.log("character ", data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((error) => {
        console.log("error ", error);
      });

    return setCharacter({});
  }, [id]);

  return (
    <div>
      <h1>Detail </h1>

      <h2>{character.name}</h2>
      <h3>{character.status}</h3>
      <h3>{character.species}</h3>
      <h3>{character.gender}</h3>
      {/* aca validamos si hay origen renderiza el h3 con la informacion */}
      { character.origen && <h3>{character.origen.name}</h3> }
      {/* aca renderizamos el h3 aunque no tenga name ni origen porque seria undefined */}
      <h3>{character.origen?.name}</h3>
      {/* <h3>{character.origen && character.origen.name}</h3> */}
      <img src={character.image} alt={character.name} />



    </div>
  );
};

export default Detail;
