import React from "react";
import MovieDetails from "../components/movieDetails";
import PageTemplate from "../components/templateMoviePage";
import { useQuery } from "react-query";
import Spinner from '../components/spinner'
import { getMovie, getSimilarMovies, getCast } from "../api/tmdb-api";
import SimilarMovies from "../components/similarMovies";
import CastList from "../components/castList";
import { getPersonDetail } from "../api/tmdb-api";
import CastModal from "../components/castModal";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";

const MovieDetailsPage = (props) => {

  const [open, setOpen] = React.useState(false);
  const [actorDetail, setActorDetails] = React.useState({});

  const handleClickOpen = async (id) => {
    console.log(id);
    const personDetail = await getPersonDetail(id);

    setOpen(true);

    setActorDetails({
      id: personDetail.id,
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
  const { data: movie, error, isLoading, isError } = useQuery(["movie", { id: id }],getMovie);
  const { data: similarMovies } = useQuery(["similarMovies", { id: id }],getSimilarMovies);
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
            <MovieDetails movie={movie} />
            <SimilarMovies itemData={similarMovies} />
            <h2>Movie Cast</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <CastList 
              actor={castList} 
              handleClickOpen={handleClickOpen} />
            <CastModal
              handleClose={handleClose}
              actorDetail={actorDetail}
              open={open}
            />
            </Grid>

          </PageTemplate>
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default MovieDetailsPage;