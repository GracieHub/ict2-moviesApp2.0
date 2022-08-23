import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
      width: "100%",
      backgroundColor: "#FFFFFF",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
    },
    inline: {
      display: "inline",
      padding: "10px 10px 0px 0px",
    },
    individualItem: {
      width: "33%",
      justifyContent: "center",
      alignItems: "center",
    },
    plusIcon: {
      cursor: "pointer",
    },
    card: { maxWidth: 300 },
    media: { height: 250 },

    title: {
      color: "#FFF",
    },
    titleBar: {
      background:
        "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
    },
    castTitle: {
      margin: "20px 0",
    },
  });

  
export default function CastList ({ actor, handleClickOpen }) {
  const classes = useStyles();
  
  return (
  <>
    
    {actor.cast.map((a) => (
    <Grid className= {classes.root} key={a.id} item xs={6} sm={5} md={4} lg={3} xl={2}>
        <Card className={classes.card}
              key={a.id} 
              actor={a} 
              handleClickOpen={handleClickOpen}>
            <CardHeader
                className={classes.header}
                title={
                    <Typography variant="h5" component="p">
                        {a.name}{" "}
                    </Typography>
                }
            />
            <CardMedia
                className={classes.media}
                image={
                    a.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${a.profile_path}`
                        : `${process.env.PUBLIC_URL}/assets/actor.jpg`
                }
            />
            <CardContent>
                <Typography variant="h6" component="p">
                    as {a.character}
                </Typography>
                <AddIcon
                  className={classes.plusIcon}
                  onClick={() => handleClickOpen(a.id)}>
                </AddIcon>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
        </Card>
    </Grid>
    ))}
  </>
    );
  }