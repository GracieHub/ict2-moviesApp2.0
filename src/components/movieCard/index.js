import React, { useContext  } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import CalendarIcon from "@material-ui/icons/CalendarTodayTwoTone";
import StarRateIcon from "@material-ui/icons/StarRate";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";
import { MoviesContext } from "../../contexts/moviesContext";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
// import { useParams } from 'react-router-dom';



const useStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
});

export default function MovieCard({ movie, action }) {
  const classes = useStyles();
  const { favourites, playlist } = useContext(MoviesContext);

  if (favourites.find((id) => id === movie.id)) {
    movie.favourite = true;
  } else {
    movie.favourite = false
  }

  if (playlist.find((id) => id === movie.id)) {
    movie.playlist = true;
  } else {
    movie.playlist = false;
  }

  return (
    <Card className={classes.card}>
    <CardHeader
      className={classes.header}
      avatar={
      <>
        {movie.favourite ? (
          <Avatar className={classes.avatar}>
            <FavoriteIcon />
          </Avatar>
        ) : null}
        {movie.playlist ? (
          <Avatar className={classes.avatar}>
            <PlaylistAdd />
          </Avatar>
        ) : null}
      </>
      }
      title={
        <Typography variant="h5" component="p">
          {movie.title}{" "}
        </Typography>
      }
    />      <CardMedia
        className={classes.media}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `${process.env.PUBLIC_URL}/assets/film-poster-placeholder.png`
        }
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {movie.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {movie.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        {action(movie)}
        <Link to={`/movies/${movie.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}