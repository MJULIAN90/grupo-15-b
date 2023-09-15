import Card from "../Card";

import container from "./styles.module.css";
export default function Cards(props) {
  const { characters } = props;

  return (
    <div className={container.container}>
      {/* {characters.map((character) => {
         const {
            id,
            name,
            status,
            species,
            gender,
            origin,
            image,
            } = character
            
        return (
          <Card
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        );
      })} */}

      {characters.map(
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
            onClose={() => window.alert("Emulamos que se cierra la card")}
          />
        )
      )}
    </div>
  );
}
