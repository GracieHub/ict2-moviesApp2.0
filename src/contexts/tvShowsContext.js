import React, { useState } from "react";

export const TvShowsContext = React.createContext(null);

const TvShowsContextProvider = (props) => {
    const [favourites, setFavourites] = useState([]);
    const [myReviews, setMyReviews] = useState({});
  //  const [playlist, setPlaylist] = useState( [] )

  const addToFavouritesTv = (id) => {
    setFavourites([...favourites, id]);
  };
  // We will use this function in a later section
  const removeFromFavouritesTv = (id) => {
    setFavourites(favourites.filter((mId) => mId !== id));
  };

  const addReview = (tvShow, review) => {
    setMyReviews({ ...myReviews, [tvShow.id]: review });
  }; 

 // const addToPlaylist = (id) => {
//    setPlaylist([...playlist, id]);
//  };

//  const removeFromPlaylist = (id) => {
 //   setPlaylist(playlist.filter((mId) => mId !== id));
//  };

  return (
    <TvShowsContext.Provider
      value={{
        favourites,
        addToFavouritesTv,
        removeFromFavouritesTv,
        addReview,
     //   playlist,
     //   addToPlaylist,
     //   removeFromPlaylist,
      }}
    >
      {props.children}
    </TvShowsContext.Provider>
  );
};

export default TvShowsContextProvider;