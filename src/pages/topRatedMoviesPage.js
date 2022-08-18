import React from "react";
import { useQuery } from 'react-query';
import PageTemplate from '../components/templateMovieListPage';
import { getTopRatedMovies } from "../api/tmdb-api";
import AddToPlaylistIcon from '../components/cardIcons/addToPlaylist'
import Spinner from '../components/spinner'
import AddToFavouritesIcon from '../components/cardIcons/addToFavourites'

const TopRatedMoviesPage = (props) => {
    const {  data, error, isLoading, isError }  = useQuery('toprated', getTopRatedMovies)
  
    const addToFavourites = () => null;
    if (isLoading) {
      return <Spinner />
    }
  
    if (isError) {
      return <h1>{error.message}</h1>
    }  
    const movies = data.results;
  
    return (
      <PageTemplate
      title='Top Rated Movies'
      movies={movies}
      action={(movie) => {
        return <div>
        <AddToFavouritesIcon movie={movie} />
         <AddToPlaylistIcon movie={movie} />
          </div>
  
      }}
      selectFavourite={addToFavourites}
    />
    );
  };
  export default TopRatedMoviesPage; 