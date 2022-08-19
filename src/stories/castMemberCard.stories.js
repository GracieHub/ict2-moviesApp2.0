import React from "react";
import CastMemberCard from "../components/castCard";
import SampleDataCast from "./sampleDataCast";
// import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
//import { action } from "@storybook/addon-actions";
//import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Movie Details Page/Cast Member",
  component: CastMemberCard,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <CastMemberCard
      movie={SampleDataCast}
      castMember={SampleDataCast.cast[0]}
    />
  );
};
Basic.storyName = "Default";