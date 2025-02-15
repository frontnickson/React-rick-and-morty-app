import { configureStore } from "@reduxjs/toolkit";

import characterSlice from '../slices/CharacterSlice';
import personSlice from '../slices/PersonSlice'
import episodesSlice from '../slices/EpisodesSlice'
import episodeSlice from '../slices/EpisodeSlice'
import locationSlice from '../slices/LocationSlice'
import locSlice from '../slices/LocSlice'

export const store = configureStore({
    reducer: {
        character: characterSlice,
        person: personSlice,
        episodes: episodesSlice,
        episode: episodeSlice,
        location: locationSlice,
        loc: locSlice
    },
    devTools: true,
})