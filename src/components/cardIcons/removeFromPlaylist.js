import React, { useContext } from "react";
import IconButton from "@material-ui/core/IconButton";
import PlaylistRemoveIcon from "@material-ui/icons/Delete";
import { MoviesContext } from "../../contexts/moviesContext";

const RemoveFromPlaylistIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleRemoveFromPlaylist = (e) => {
    e.preventDefault();
    context.removeFromPlaylist(movie);
  };
  return (
    <IconButton
      aria-label="remove from playlist"
      onClick={handleRemoveFromPlaylist}
    >
      <PlaylistRemoveIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default RemoveFromPlaylistIcon;