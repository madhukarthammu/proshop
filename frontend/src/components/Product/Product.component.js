import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from "../Rating/Rating.component";
import { withRouter } from "react-router";

const useStyles = makeStyles({
  root: {
    maxWidth: 270,
  },
  media: {
    height: 140,
  },
});

const Product = ({ image, name, price, rating, numReviews, history, id }) => {
  const classes = useStyles();

  return (
    <>
      <Card
        className={classes.root}
        onClick={() => history.push(`/product/${id}`)}
      >
        <CardActionArea>
          <CardMedia className={classes.media} image={image} />
          <CardContent>
            <h4>{name}</h4>
            <Rating rating={rating} text={`${numReviews} reviews`} />
            <h2>${price}</h2>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default withRouter(Product);
