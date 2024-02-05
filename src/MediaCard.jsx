import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CircularColor } from "./CircularColor";
import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { useParams } from "react-router-dom";

export function MediaCard() {
  const { beerData, isLoading } = useContext(BeerContext);
  const { id } = useParams();

  if (isLoading) {
    return <CircularColor />;
  }

  const beer = beerData?.find((beerItem) => beerItem.id === Number(id));

  if (!beer) {
    return <p>Beer not found</p>;
  }
  return (
    <Card
      sx={{
        maxWidth: 345,
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      <CardMedia
        sx={{
          height: 300,
          maxWidth: 300,
          maxHeight: 300,
          backgroundSize: "contain",
          textAlign: "center",
        }}
        image={beer.image_url}
        title={beer.name}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ textAlign: "center" }}
        >
          {beer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" component="div">
          <p>
            <b>Tagline:</b> {beer.tagline}
          </p>
          <p>
            <b>First brewed:</b> {beer.first_brewed}
          </p>
          <p>
            <b>Description:</b> {beer.description}
          </p>
          <p>
            <b>Alcohol By Volume:</b> {beer.abv} %
          </p>
          <p>
            <b>Volume:</b> {beer.volume.value} litres
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
