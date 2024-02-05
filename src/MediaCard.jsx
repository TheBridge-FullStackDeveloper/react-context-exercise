import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CircularColor } from "./CircularColor";
import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { Link } from "react-router-dom";

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
    <Box display="flex" justifyContent="center" alignItems="center" margin={3}>
      <Card
        sx={{
          maxWidth: 345,
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
        <Box display="flex" justifyContent="center" margin={2}>
          <Button variant="contained" endIcon={<SendIcon />}>
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Go back to the list
            </Link>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
