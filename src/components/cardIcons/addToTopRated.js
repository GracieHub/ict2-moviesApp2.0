import React, { useContext } from "react";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";
import TopRatedAddIcon from "@material-ui/icons/Grade";

const AddToTopRatedtIcon = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToTopRated = (e) => {
    e.preventDefault();
    context.addAddToTopRated(movie);
  };
  return (
    <IconButton aria-label="add to top rated" onClick={handleAddToTopRated}>
      <TopRatedAddIcon color="primary" fontSize="large" />
    </IconButton>
  );
};

export default AddToTopRatedtIcon;