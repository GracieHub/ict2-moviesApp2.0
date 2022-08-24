import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ImageList } from "@material-ui/core";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import LocalMoviesIcon from "@material-ui/icons/LocalMovies";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  table: {
    minWidth: 550,
  },
  root: {
    margin: "30px 0",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: "#eeeeee",
  },
  image: {
    cursor: "pointer",
    objectFit: "cover",
  },
  imageList: {
    flexWrap: "nowrap",
    transform: "translateZ(0)",
  },
  title: {
    color: "#FFF",
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  similarMoviesTitle: {
    margin: "20px 0",
  },
});

export default function SimilarMovies({ itemData, category}) {
  const classes = useStyles();
  let title = category === "movie" ? "Movies" : "Tv Shows";
  let titleMapping = category === "movie" ? "title" : "name";
  let urlLink = category === "movie" ? "/movies" : "/tv";
  
  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        className={classes.similarMoviesTitle}>
        <h2>Similar {title} you might also like..</h2>
      </Typography>
      <div className={classes.root}>
        <ImageList className={classes.imageList} cols={6}>
          {itemData.results.map((item) => (
            <ImageListItem key={item.id} className={classes.image}>
              <a href={`${urlLink}/${item.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
                  alt={item.title}
                />
              </a>
              <ImageListItemBar
                title={item[titleMapping]}
                subtitle={<span>Average Rating: {item.vote_average}</span>}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <a href={`/movies/${item.id}`}>
                  <IconButton aria-label={`star ${item.titleMapping}`}>
                    
                    <LocalMoviesIcon className={classes.title} />
                  </IconButton>
                  </a>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}