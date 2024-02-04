import { useContext } from "react";
import { CharacterContext } from "../../../Context/CharacterContext";
import { useParams } from "react-router-dom";

export default function CardHeader() {
  const { BeersData } = useContext(CharacterContext);
  const { id } = useParams();

  const character = BeersData && BeersData.find((char) => char.id === Number(id));

  return <h1>{character?.name}</h1>;
}
