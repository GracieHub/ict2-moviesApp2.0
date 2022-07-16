import React from "react";
import PageTemplate from "../components/templateMovieListPage";
import { getUpcomingMovies } from "../api/tmdb-api";
// import AddToFavoritesIcon from '../components/cardIcons/addToFavourites' //added for part 4, exercise 1
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist' //added for part 4, exercise 2
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'

const UpcomingMoviesPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('upcoming', getUpcomingMovies)

    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
    const favourites = movies.filter((m) => m.favourite);
    localStorage.setItem("favourites", JSON.stringify(favourites));
    
    const addToFavourites = (movieId) => true 

  return (
    <PageTemplate
      title="Upcoming Movies"
      movies={movies}
      selectFavourite={addToFavourites}
    // added as part of part 4, exercise 1
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />  // updated to use playlsit part 4, exercise 2

              }}
              // end of addition
    />
  );
};
export default UpcomingMoviesPage;