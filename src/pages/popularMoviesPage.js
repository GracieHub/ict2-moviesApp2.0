import React from "react";
import PageTemplate from '../components/templateMovieListPage'
import { getPopularMovies } from "../api/tmdb-api";
import { useQuery } from 'react-query'
import Spinner from '../components/spinner'
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist';

const PopularMoviesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('popular', getPopularMovies)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const movies = data.results;

  // Redundant, but necessary to avoid app crashing.
  const favourites = movies.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))
  // const addToFavorites = (movieId) => true 


  return (
    <PageTemplate
      title='Popular Movies'
      movies={movies}
      action={(movie) => {
        return <AddToPlaylistIcon movie={movie} />
      }}
    />
  );
};
export default PopularMoviesPage;