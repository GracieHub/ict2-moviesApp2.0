import React, { useContext } from "react";
import PageTemplate from "../components/templateTvListPage";
import { TvShowsContext } from "../contexts/tvShowsContext";
import { useQueries } from "react-query";
import { getTvShow } from "../api/tmdb-api";
import Spinner from "../components/spinner";
import RemoveFromFavouritesTv from "../components/cardIcons/removeFromFavouritesTv";
import WriteReview from "../components/cardIcons/writeReview";

const FavouriteTvPage = () => {
  const { favourites: tvShowIds } = useContext(TvShowsContext);

  // Create an array of queries and run in parallel.
  const favouriteTvQueries = useQueries(
    tvShowIds.map((tvShowId) => {
      return {
        queryKey: ["tvShow", { id: tvShowId }],
        queryFn: getTvShow,
      };
    })
  );

  // Check if any of the parallel queries is still loading.
  const isLoading = favouriteTvQueries.find((m) => m.isLoading === true);

  if (isLoading) {
    return <Spinner />;
  }

  const tvShows = favouriteTvQueries.map((q) => {
    q.data.genre_ids = q.data.genres.map((g) => g.id);
    return q.data;
  });

  return (
    <PageTemplate
      title="Favourite Tv Shows"
      tvShow={tvShows}
      action={(tvShow) => {
        return (
          <>
            <RemoveFromFavouritesTv tvShow={tvShow} />
            <WriteReview tvShow={tvShow} />
          </>
        );
      }}
    />
  );
};

export default FavouriteTvPage;