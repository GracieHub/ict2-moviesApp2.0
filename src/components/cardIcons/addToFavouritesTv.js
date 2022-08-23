import React, { useContext } from "react";
import { TvShowsContext } from "../../contexts/tvShowsContext";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";

const AddToFavouritesTvIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleAddToFavouritesTv = (e) => {
    e.preventDefault();
    context.addToFavouritesTv(tvShow);
  };
  return (
    <IconButton aria-label="add to favourites" onClick={handleAddToFavouritesTv}>
      <FavoriteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToFavouritesTvIcon;