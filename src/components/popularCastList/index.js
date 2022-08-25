import React from "react";
import Cast from "../castCard";
import Grid from "@material-ui/core/Grid";

const popularCastList = (props) => {
  let castmembers = props.people.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Cast key={m.id} person={m} />
    </Grid>
  ));
  return castmembers;
};

export default popularCastList;