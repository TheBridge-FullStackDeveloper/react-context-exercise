import { useContext } from "react";
import { CharacterContext } from "../../../Context/CharacterContext";
import { useParams } from "react-router-dom";


export default function CardBody() {

  const { BeersData } = useContext(CharacterContext);
  const { id } = useParams();

  const character = BeersData.find((char) => char.id === Number(id));
  return (
    <>
    <h2>{character?.tagline}</h2>
    <h3>{character?.first_brewed}</h3>
    <h3>{character?.description}</h3>
    <img src={character?.image_url} alt="" />
    <p>Alcohol: {character?.abv}%</p>
    </>
  )
};
