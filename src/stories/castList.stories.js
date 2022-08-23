import React from "react";
import CastList from "../components/castList";
import SampleMovie from "./sampleDataCast";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
  title: "Movie Details Page/CastList",
  component: CastList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
    (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,

  ],
};

export const Basic = () => {
  const castMembers = SampleMovie.cast;
  return (
      <CastList
        castMembers={castMembers}
      />
  );
};
Basic.storyName = "Default";