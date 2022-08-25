import React, { useState } from "react";
import Header from "../headerMovieList";
import FilterTvCard from "../filterTvCard";
import Grid from "@material-ui/core/Grid";
import Fab from "@material-ui/core/Fab";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import TvShowList from "../tvShowList";

const useStyles = makeStyles((theme) =>  ({
  root: {
    backgroundColor: "#17ddeb",
    paddingTop: theme.spacing(7),
  },
  fab: {
    marginTop: theme.spacing(8),
    position: "fixed",
    top: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function TvListPageTemplate({ tvShows, title, action }) {

  const classes = useStyles();
  const [titleFilter, setTitleFilter] = useState("");
  const [genreFilter, setGenreFilter] = useState("0");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [minRatingFilter, setMinRatingFilter] = useState("0");
  const [maxRatingFilter, setMaxRatingFilter] = useState("10");

  const genreId = Number(genreFilter);
  const minRating = minRatingFilter;
  const maxRating = maxRatingFilter;
  let displayedShows = tvShows
    .filter((t) => {
      return t.name.toLowerCase().search(titleFilter.toLowerCase()) !== -1;
    })
    .filter((t) => {
      return genreId > 0 ? t.genre_ids.includes(genreId) : true;
    })
    .filter((m) => {
      return (
        Number(m.vote_average) > minRating && Number(m.vote_average) < maxRating
      );
    });

    const handleChange = (type, value) => {
      if (type === "title") {
        setTitleFilter(value);
      } else if (type === "minRating") {
        setMinRatingFilter(value);
      } else if (type === "maxRating") {
        setMaxRatingFilter(value);
      } else {
        setGenreFilter(value);
  
      }
  };

  return (
    <>
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <TvShowList action={action} tvShows={displayedShows} />
      </Grid>
    </Grid>
    <Fab
        color="secondary"
        variant="extended"
        onClick={() => setDrawerOpen(true)}
        className={classes.fab}
      >
        Filter
      </Fab>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <FilterTvCard
          onUserInput={handleChange}
          titleFilter={titleFilter}
          genreFilter={genreFilter}
          minRatingFilter={minRatingFilter}
          maxRatingFilter={maxRatingFilter}
        />
      </Drawer>
    </>    
  );
}
export default TvListPageTemplate;