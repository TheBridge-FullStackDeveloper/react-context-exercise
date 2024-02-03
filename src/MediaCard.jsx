import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { useParams } from "react-router-dom";

export function MediaCard() {
  const { beerData, isLoading } = useContext(BeerContext);
  const { id } = useParams();

  if (isLoading) {
    return <h1>Loading your beer</h1>;
  }

  const beer = beerData?.find((beerItem) => beerItem.id === Number(id));

  console.log(beer);

  if (!beer) {
    return <p>Beer not found</p>;
  }
  return (
    <Card sx={{ maxWidth: 345 }} style={{ margin: 20 }}>
      <CardMedia
        sx={{
          height: 300,
          maxWidth: 300,
          maxHeight: 300,
          backgroundSize: "contain",
        }}
        image={beer.image_url}
        title={beer.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {beer.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <p>Description: {beer.description}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
