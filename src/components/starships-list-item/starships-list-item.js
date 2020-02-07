import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import "./starships-list-item.css";

const StarshipsListItem = ({ starship, starshipAddedToCart, starships }) => {

  const { name, model, costInCredits, img, id } = starship;
  return (
    
    <Grid item xs={12} sm={6} md={6}>
      <Card variant="outlined">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Starship Image"
            height="240"
            image={img}
            title="Starship Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography
              gutterBottom
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {model}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Price: {costInCredits} UAH
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            variant="outlined"
            color="secondary"
            disabled={costInCredits > 0 ? false : true}
            onClick={()=>starshipAddedToCart(id, starships)}
          >
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default StarshipsListItem;
