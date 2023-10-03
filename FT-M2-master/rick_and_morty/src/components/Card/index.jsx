import styled from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../Redux/actions";

import { styles } from "./styles";
import "./stylesCss.css";
import { useEffect, useState } from "react";

const CardContainer = styled.div`
  background-color: lightblue;
  margin: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Card = function (props) {
  const {
    onClose,
    name,
    status,
    species,
    gender,
    origin,
    image,
    id,
    addFav,
    removeFav,
    myFavorites,
  } = props;
  console.log("props", props);
  // const {
  //    onClose,
  //    name,
  //    status,
  //    species,
  //    gender,
  //    origin,
  //    image,
  // } = props;

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      removeFav(id);
      setIsFav(false);
    } else {
      addFav({
        name,
        status,
        species,
        gender,
        origin,
        image,
        id,
      });
      setIsFav(true);
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <CardContainer>
      <button onClick={() => onClose(id)} style={styles.button}>
        X
      </button>
      <Link to={`/detail/${id}`}>
        <h3 className='titulo'>{name}</h3>
      </Link>
      <button>
        {isFav ? (
          <button onClick={handleFavorite}>❤️</button>
        ) : (
          <button onClick={handleFavorite}>🤍</button>
        )}
      </button>
      <h2>{status} </h2>
      <h2>{species} </h2>
      <h2>{gender} </h2>
      <h2 className='origin'>{origin} </h2>
      <img
        src={image}
        alt=''
        style={{
          width: "80%",
          marginBottom: "20px",
          borderRadius: "10px",
        }}
      />
    </CardContainer>
  );
};

const mapStateToProps = (state) => ({
  myFavorites: state.myFavorites,
});

export default connect(mapStateToProps, { addFav, removeFav })(Card);
