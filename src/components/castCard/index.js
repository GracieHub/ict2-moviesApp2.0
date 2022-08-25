import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const UseStyles = makeStyles({
  card: { maxWidth: 345 },
  media: { height: 500 },
  avatar: {
    backgroundColor: "rgb(255, 0, 0)",
  },
}); 

export default function castCard(props) {
  const classes = UseStyles();
  const cast = props.person;

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          cast.profile_path
            ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
            : `${process.env.PUBLIC_URL}/assets/actor.jpg`
        }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cast.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" onClick={null}>
          Read More about {cast.name}
        </Button>
      </CardActions>
    </Card>
  );
}