import React from "react";
import PageTemplate from "../components/templateTvListPage";
import { useQuery } from 'react-query';
import Spinner from '../components/spinner';
import {getTvShows} from '../api/tmdb-api';
import AddToFavouritesTvIcon from "../components/cardIcons/addToFavouritesTv";


const TvSeriesPage = (props) => {
  const {  data, error, isLoading, isError }  = useQuery('discoverTV', getTvShows)

  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const tvShows = data.results;

  const favourites = tvShows.filter(m => m.favourite)
  localStorage.setItem('favourites', JSON.stringify(favourites))

  /*.map((tvShow) => {
    tvShow.title = tvShow.name;
    tvShow.type = "tv-series"
    tvShow.release_date = tvShow.first_air_date;
    return tvShow;
  }); */

  return (
    <PageTemplate
      title="Discover TV Shows"
      tvShows={tvShows}
      action={(tvShow) => {
        return <AddToFavouritesTvIcon tvShow={tvShow} />
      }}
    />
);
};
export default TvSeriesPage;