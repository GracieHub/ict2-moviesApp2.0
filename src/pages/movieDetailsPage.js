import React from "react";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
// import useMovie from "../hooks/useMovie";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getMovie, getSimilarMovies, getCast } from "../api/tmdb-api";
import SimilarMovies from "../components/similarMovies";
import CastList from "../components/castList";
import Paper from "@material-ui/core/Paper";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { getPersonDetail } from "../api/tmdb-api";
import CastModal from "../components/castModal";



const useStyles = makeStyles((theme) => ({
  chipRoot: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipSet: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chipLabel: {
    margin: theme.spacing(0.5),
  },
  fab: {  //New
    position: "fixed",
    top: theme.spacing(15),
    right: theme.spacing(2),
  },
}));

const MovieDetailsPage = (props) => {

  const [open, setOpen] = React.useState(false);
  const [actorDetail, setActorDetails] = React.useState({});

  const handleClickOpen = async (id) => {
    console.log(id);

    const personDetail = await getPersonDetail(id);

    setOpen(true);
    setActorDetails({
      name: personDetail.name,
      from: personDetail.place_of_birth,
      popularity: personDetail.popularity,
      biography: personDetail.biography,
      dateOfBirth: personDetail.birthday,
      image: personDetail.profile_path,
    });
  };
  const handleClose = () => {
    setOpen(false);
    setActorDetails({});
  };

  const { id } = useParams();
  const classes = useStyles();
  const { data: movie, error, isLoading, isError } = useQuery(
    ["movie", { id: id }],
    getMovie
  );

  const { data: similarMovies } = useQuery(
    ["similarMovies", { id: id }],
    getSimilarMovies
  );

  const { data: castList } = useQuery(["castList", { id: id }], getCast);


  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  
  return (
    <>
      {movie && similarMovies && castList? (
        <>
          <PageTemplate movie={movie}>
            <SimilarMovies itemData={similarMovies} />
            <MovieDetails movie={movie} />
            <Paper component="ul" className={classes.chipSet}>
          <h2>Movie Cast</h2>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <CastList cast={castList} handleClickOpen={handleClickOpen} />
            <CastModal
              handleClose={handleClose}
              actorDetail={actorDetail}
              open={open}
            />
          </Grid>
        </Paper>
          </PageTemplate>
        </>
      ) : (
        <p>Waiting for movie details</p>
      )}
    </>
  );
};

export default MovieDetailsPage;