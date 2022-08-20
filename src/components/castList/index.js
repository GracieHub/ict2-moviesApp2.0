import React from "react";
import CastMemberCard from "../castCard";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import { getCast } from "../../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../spinner";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import { getPersonDetail } from "../../api/tmdb-api";
import CastModal from "../castModal";

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
  });

  

const CastList = ( cast) => {
  const { id } = useParams();
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(false);
  const [actorDetail, setActorDetails] = React.useState({});

  const handleClickOpen = async (id) => {
    console.log(id);

    const personDetail = await getPersonDetail(id);

    setOpen(true);
    setActorDetails({
      name: personDetail.name,
      from: personDetail.place_of_birth,
      popularity: personDetail.popularity,
      biography: personDetail.biography,
      dateOfBirth: personDetail.birthday,
      image: personDetail.profile_path,
    });
  };
  const handleClose = () => {
    setOpen(false);
    setActorDetails({});
  };
  
  const {  data, error, isLoading, isError }  = useQuery(['cast', {id: id}], getCast)
  
  if (isLoading) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }  
  const credits = data;
  console.log(data);

  let castMemberCards = credits.cast.map((a) => (
    <Grid key={a.id} item xs={6} sm={5} md={4} lg={3} xl={2}>
        <CastMemberCard key={a.id} actor={a} 
        handleClickOpen={handleClickOpen} />
        <CastModal
        handleClose={handleClose}
        actorDetail={actorDetail}
        open={open}/>
        <AddIcon
              className={classes.plusIcon}
              onClick={() => handleClickOpen(a.id)}
            />
            <CastModal
              handleClose={handleClose}
              actorDetail={actorDetail}
              open={open}
            />
    </Grid>
  ));
  return castMemberCards;
};

export default CastList;