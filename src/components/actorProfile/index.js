import React from "react";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
// import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';

/* const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(1.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));
*/

const ActorProfile = ( { actor }) => {
  //const classes = useStyles();


  return (
    <>

      <Typography variant="h5" component="h3">
        Biography
      </Typography>
      <List>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Born"
          secondary={actor.birthday}
        />
      </ListItem>
      <Divider component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Place of Birth"
          secondary={actor.place_of_birth}
        />
      </ListItem>
      <Divider component="li" />
      </List>

      <Typography variant="h6" component="p">
        {actor.biography}
      </Typography>
      </>
  );
};
export default  ActorProfile; 