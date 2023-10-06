import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Card from '../Card';
import { removeFav, filter, order } from './../../Redux/actions'

const Favorites = () => {
  const [aux, setAux] = useState(false);
  const favorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    setAux(!aux);
    dispatch(order(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filter(e.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Todos">Todos</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value="unknown">unknown</option>

      </select>
      {favorites.length > 0 && favorites.map(
        ({ id, name, status, species, gender, origin, image }) => (
          <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => dispatch(removeFav(id))}
          />
        )
      )}
    </div>
  )
}

export default Favorites