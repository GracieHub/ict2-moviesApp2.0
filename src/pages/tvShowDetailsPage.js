import React from "react";
import { useParams } from "react-router-dom";
import TvShowDetails from "../components/tvShowDetails";
import PageTemplate from "../components/templateTvPage";
import { getTvShow, getTvCast, getSimilarTvShows } from "../api/tmdb-api";
import { useQuery } from "react-query";
import Spinner from "../components/spinner";
import { Grid } from "@material-ui/core";
import CastList from "../components/castList";
import CastModal from "../components/castModal";
import { getPersonDetail } from "../api/tmdb-api";
import SimilarMovies from "../components/similarMovies";

const TvShowDetailsPage = (props) => {

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
    const { data: tvShow, error, isLoading, isError } = useQuery(["tvShow", { id: id }],getTvShow);
    const { data: similarTvShows } = useQuery(["similarTvSHows", { id: id }],getSimilarTvShows);
    const { data: castList } = useQuery(["castList", { id: id }], getTvCast);
  
  
    if (isLoading) {
        return <Spinner />;
    }

    if (isError) {
        return <h1>{error.message}</h1>;
    }

    return (
        <>
            {tvShow && castList ? (
                <>
                    <PageTemplate tvShow={tvShow}>
                        <TvShowDetails tvShow={tvShow} />
                        <SimilarMovies itemData={similarTvShows} category={"tv"}/>
                        <h2>Tv Show Cast</h2>
                        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <CastList 
                         actor={castList} 
                         handleClickOpen={handleClickOpen} />
                        <CastModal
                         handleClose={handleClose}
                         actorDetail={actorDetail}
                         open={open}
                        />
                     </Grid>
                    </PageTemplate>
                </>
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default TvShowDetailsPage;