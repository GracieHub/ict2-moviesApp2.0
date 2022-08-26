import React from "react";
import TvShowCard from "../components/tvShowCard";
import { sampleTV } from "./sampleData";
import { MemoryRouter } from "react-router-dom";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import TvShowsContextProvider from "../contexts/tvShowsContext";

export default {
    title: "TV Show Page/TV Show Card",
    component: TvShowCard,
    decorators: [
        (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
        (Story) => <TvShowsContextProvider>{Story()}</TvShowsContextProvider>,
      ],
};

export const Basic = () => {
    return (
        <TvShowCard
        tvShow={(sampleTV)}
        action={(tvShow) => <AddToFavouritesIcon tvShow={tvShow}/>}
        taging={(tvShow) => null}
        />
    );
};

Basic.storyName = "Default";