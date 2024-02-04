import { useContext } from "react";
import { Card } from "../components/Card";
import { CharacterContext } from "../Context/CharacterContext";

export const BeersDetailPage = () => {
  const { isLoading } = useContext(CharacterContext);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Card />
    </div>
  );
};
