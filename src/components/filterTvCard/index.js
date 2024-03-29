import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { getTvGenres } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from '../spinner'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: { height: 300 },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
    backgroundColor: "rgb(255, 255, 255)",
  },
  rating: {
    margin: theme.spacing(1),
    minWidth: 100,
    backgroundColor: "rgb(255, 255, 255)",
  },
}));

export default function FilterTvCard(props) {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery("TvGenres", getTvGenres);
  
  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const genres = data.genres;
  if (genres[0].name !== "All"){
    genres.unshift({ id: "0", name: "All" });
  }

  const ratings = [0,1,2,3,4,5,6,7,8,9,10]

  const handleChange = (e, type, value) => {
    e.preventDefault();
    props.onUserInput(type, value); // NEW
  };

  const handleTextChange = (e, props) => {
    handleChange(e, "name", e.target.value);
  };

  const handleGenreChange = (e) => {
    handleChange(e, "genre", e.target.value);
  };

  const handleMinRatingChange = (e) => {
    handleChange(e, "minRating", e.target.value);
  };

  const handleMaxRatingChange = (e) => {
    handleChange(e, "maxRating", e.target.value);
  };


  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h1">
          <SearchIcon fontSize="large" />
          Filter the Tv Shows.
        </Typography>
        <TextField
          className={classes.formControl}
          id="filled-search"
          label="Search field"
          type="search"
          value={props.titleFilter}
          variant="filled"
          onChange={handleTextChange}
        />
        <FormControl className={classes.formControl}>
          <InputLabel id="genre-label">Genre</InputLabel>
          <Select
            labelId="genre-label"
            id="genre-select"
            value={props.genreFilter}
            onChange={handleGenreChange}
          >
            {genres.map((genre) => {
              return (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </CardContent>
      <CardContent>
          <FormControl className={classes.rating}>
            <InputLabel id="min-label">Min Rating</InputLabel>
            <Select
              labelId="min-label"
              id="min-select"
              value={props.minRatingFilter}
              onChange={handleMinRatingChange}
            >
              {ratings.map((rating) => {
                return (
                  <MenuItem key={`min${rating} `} value={rating}>
                    {rating}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <FormControl className={classes.rating}>
            <InputLabel id="max-label">Max Rating</InputLabel>
            <Select
              labelId="max-label"
              id="max-select"
              value={props.maxRatingFilter}
              onChange={handleMaxRatingChange}
            >
              {ratings.map((rating) => {
                return (
                  <MenuItem key={`max${rating}`} value={rating}>
                    {rating}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </CardContent>
    </Card>
    <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography variant="h5" component="h1">
            <SearchIcon fontSize="large" />
            Sort the Tv Shows.
          </Typography>
        </CardContent>
      </Card>
      </>
  );
}