import React from 'react'
import { Route, Routes } from 'react-router-dom'

import CharacterPage from '../page/CharacterPage/CharacterPage'
import PersonPage from '../page/PersonPage/PersonPage'
import EpisodesPage from '../page/EpisodesPage/EpisodesPage'
import EpisodesDetailsPage from '../page/EpisodesDetailsPage/EpisodesDetailsPage';
import LocationPage from '../page/LocationPage/LocationPage'
import LocationDetailsPage from '../page/LocationDetailsPage/LocationDetailsPage';
import ErrorPage from '../page/ErrorPage/ErrorPage'
import FavoritesPage from '../page/FavoritesPage/FavoritesPage'

function AppRoutes() {
    return (
        <Routes>
            <Route index element={<CharacterPage />} />
            <Route index path='/character' element={<CharacterPage />} />
            <Route path='/character/:id' element={<PersonPage />} />
            <Route path='/episode' element={<EpisodesPage />} />
            <Route path='/episode/:id' element={<EpisodesDetailsPage />} />
            <Route path='/location' element={<LocationPage />} />
            <Route path='/location/:id' element={<LocationDetailsPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
            <Route path='*' element={<ErrorPage />} />
        </Routes>
    )
}

export default AppRoutes