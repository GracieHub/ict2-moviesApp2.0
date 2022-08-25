import React from "react";
import { getPopularCast } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import PopularCastList from "../components/popularCastList";
import Grid from "@material-ui/core/Grid";
import Header from "../components/headerMovieList";
import { makeStyles } from "@material-ui/core";
import CastModal from "../components/castModal";
import { getCast } from "../api/tmdb-api";
import { getPersonDetail } from "../api/tmdb-api";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#bfbfbf",
    paddingTop: theme.spacing(7),
  },
}));

const PopularCastPage = () => {
  const classes = useStyles();
  const { data, error, isLoading, isError } = useQuery(
    "popularPeople",
    getPopularCast
  );

  const [open, setOpen] = React.useState(false);
  const [actorDetail, setActorDetails] = React.useState({});

  const handleClickOpen = async (id) => {
    console.log(id);
    const personDetail = await getPersonDetail(id);

    setOpen(true);

    setActorDetails({
      id: personDetail.id,
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

  const { id } = useParams();
  const { data: castList } = useQuery(["castList", { id: id }], getCast);

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  const people = data.results;
  // console.log(data.results);

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={"Popular Cast Page"} />
      </Grid>
      <Grid item container spacing={5}>
        <PopularCastList people={people}> handleClickOpen={handleClickOpen}</PopularCastList>
            <CastModal
              handleClose={handleClose}
              actorDetail={actorDetail}
              open={open}
            />
      </Grid>
    </Grid>
  );
};
export default PopularCastPage;