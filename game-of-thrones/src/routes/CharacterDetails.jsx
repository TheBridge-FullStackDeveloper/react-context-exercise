import { useContext } from "react";
import { GotContext } from "../context/GotContext";
import { useParams } from "react-router";

const CharacterDetails = () => {
  let character = null;
  const gotCharacters = useContext(GotContext);

  const { characterId } = useParams();

  if (gotCharacters) {
    character = gotCharacters.find(
      (character) => String(character.id) === characterId
    );
  }
  const { firstName, lastName, title, family, imageUrl } = character || {};

  return (
    <div>
      {!character ? (
        <h1>Loading...</h1>
      ) : (
        <div style={{color:'white'}}>
          <img style={{height: '300px', objectFit: 'cover'}} src={imageUrl} alt={imageUrl} />
          <h1 style={{display:'flex', justifyContent:'center'}} >
            {firstName} {lastName}
          </h1>
          <h2 style={{display:'flex', justifyContent:'center'}}>{title}</h2>
          <h3 style={{display:'flex', justifyContent:'center'}}>{family}</h3>
        </div>
      )}
    </div>
  );
};

export default CharacterDetails;
