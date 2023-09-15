import styled from "styled-components";
import { styles } from "./styles";
import './stylesCss.css'

const CardContainer = styled.div`
  background-color: lightblue;
  margin: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default function Card({
  onClose,
  name,
  status,
  species,
  gender,
  origin,
  image,
}) {

  // const {
  //    onClose,
  //    name,
  //    status,
  //    species,
  //    gender,
  //    origin,
  //    image,
  // } = props;

  return (
    <CardContainer>
      <button 
        onClick={onClose}
        style={styles.button}

      >
        X
      </button>
      <h2 className="titulo">{name} </h2>
      <h2>{status} </h2>
      <h2>{species} </h2>
      <h2>{gender} </h2>
      <h2 className="origin">{origin} </h2>
      <img 
        src={image} 
        alt='' 
        style={{
          width: '80%',
          marginBottom: '20px',
          borderRadius: '10px',
        }}
      />
    </CardContainer>
  );
}
