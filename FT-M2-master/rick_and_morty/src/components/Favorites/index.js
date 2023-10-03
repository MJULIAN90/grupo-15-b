import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import Card from '../Card';
import { removeFav } from './../../Redux/actions'

const Favorites = () => {

  const favorites = useSelector(state => state.myFavorites);
  const dispatch = useDispatch();

  console.log(favorites);

  return (
    <div>
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