import React, { Component } from "react";
import { connect } from "react-redux";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import StarshipsListListItem from "../starships-list-item";
import { StarshipService } from "../../services/starships-service";
import Spinner from "../spinner";
import "./starships-list.css";
import {
  starshipsLoaded,
  starshipsRequested,
  starshipAddedToCart
} from "../../actions";

class StarshipsList extends Component {
  starshipService = new StarshipService();

  async componentDidMount() {
    const { starshipsLoaded, starshipsRequested } = this.props;
    starshipsRequested();
    this.starshipService.getAllStarships().then(starships => {
      starshipsLoaded(starships);
    });
  }

  render() {
    const { starships, loading, starshipAddedToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    return (
      <Container maxWidth="md" className="mrg-container">
        <Grid container spacing={6}>
          {starships.map(starship => {
            return (
              <StarshipsListListItem key={starship.id} starship={starship} starshipAddedToCart={starshipAddedToCart} starships={starships}/>
            );
          })}
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = ({ starshipsReducer: { starships, loading } }) => ({
  starships,
  loading
});

const mapDispatchToProps = {
  starshipsLoaded,
  starshipsRequested,
  starshipAddedToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsList);
