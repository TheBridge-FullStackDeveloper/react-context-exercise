import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { CircularColor } from "./CircularColor";
import { useContext } from "react";
import { BeerContext } from "../Context/BeerContext";
import { Link } from "react-router-dom";

export function TitlebarBelowImageList() {
  const { beerData, isLoading } = useContext(BeerContext);

  if (isLoading) {
    return <CircularColor />;
  }

  return (
    <ImageList
      sx={{ width: 1300, margin: 5 }}
      cols={4}
      rowHeight={250}
      gap={10}
    >
      {beerData.map((item, index) => (
        <Link
          key={index}
          to={item.id.toString()}
          style={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "#1976d2",
          }}
        >
          <ImageListItem
            key={item.image_url}
            style={{
              textAlign: "center",
              border: "1px #1976d2 solid",
              borderRadius: "10px",
              padding: 5,
            }}
          >
            <div>
              <img
                src={`${item.image_url}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading="lazy"
                style={{ maxHeight: 200, maxWidth: 200 }}
              />
            </div>
            <ImageListItemBar title={item.name} position="below" />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  );
}
