import React from "react";
import CastList from "../components/castList";
import SampleMovie from "./sampleDataCast";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Movie Details Page/CastList",
  component: CastList,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
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