import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import { TvShowsContext } from "../../contexts/tvShowsContext";

const RemoveFromTvFavouritesIcon = ({ tvShow }) => {
  const context = useContext(TvShowsContext);

  const handleRemoveFromFavouritesTv = (e) => {
    e.preventDefault();
    context.removeFromFavouritesTv(tvShow);
  };
  return (
    <IconButton
      aria-label="remove from favorite Tv Shows"
      onClick={handleRemoveFromFavouritesTv}
    >
      <DeleteIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromTvFavouritesIcon;