import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MovieDetailsPage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage"; 
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from './components/siteHeader'
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import MoviesContextProvider from "./contexts/moviesContext";
import TvShowsContextProvider from "./contexts/tvShowsContext";
import AddMovieReviewPage from './pages/addMovieReviewPage'
import PlaylistMoviesPage from "./pages/playlistMoviesPage";
import PopularMoviesPage from "./pages/popularMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import TvSeriesPage from "./pages/tvSeriesPage";
import TvShowDetailsPage from "./pages/tvShowDetailsPage";
import PopularCastPage from "./pages/popularCastPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000, 
      refetchOnWindowFocus: false
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <SiteHeader />
        <TvShowsContextProvider>
        <MoviesContextProvider>
      <Routes>
        <Route path="/movies/playlist" element={<PlaylistMoviesPage />} />
        <Route path="/reviews/:id" element={<MovieReviewPage/>} />
        <Route path="/reviews/form" element={<AddMovieReviewPage/>} />
        <Route path="/movies/favourites" element={<FavouriteMoviesPage/>}/>
        <Route path="/movies/upcoming" element={<UpcomingMoviesPage />} />
        <Route path="/movies/toprated" element={<TopRatedMoviesPage />} />
        <Route path="/movies/popular" element={<PopularMoviesPage />} />
        <Route path="/tv-series" element={<TvSeriesPage/>} />
        <Route path="/tv/:id" element={<TvShowDetailsPage/>} />
        <Route path="/movies/:id" element={<MovieDetailsPage/>} />
        <Route path="/popularCast" element={<PopularCastPage/>} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        </MoviesContextProvider>
        </TvShowsContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));