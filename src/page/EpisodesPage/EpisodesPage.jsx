import React, { useEffect, useState } from 'react'
import { getEpisodes } from '../../slices/EpisodesSlice'
import { useDispatch, useSelector } from 'react-redux'

import EpisodeList from '../../components/EpisodeList/EpisodeList'
import ErrorPage from '../ErrorPage/ErrorPage'

import image from '../../images/rickandmorty.png'
import styles from './Episodes.module.css'

function EpisodesPage() {

    const dispatch = useDispatch()
    const { episodes, isLoading } = useSelector((state) => state.episodes)

    const [list, setList] = useState([])
    const [value, setValue] = useState('')

    useEffect(() => { dispatch(getEpisodes()) }, [dispatch])

    useEffect(() => {
        if (isLoading) {
            const filterList = episodes.filter(item => { return item.name.toLowerCase().includes(value) })
            setList(filterList)
        }
    }, [value, isLoading, episodes, dispatch])

    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <img alt='image_episode' src={image} />
                <div className={styles.input__container}>
                    <div className={styles.input__icon}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="rgb(156, 156, 156)" /></svg>
                    </div>
                    <input type="text" placeholder="Search episodes..." className={styles.input} onChange={(event) => { setValue(event.target.value) }} />
                </div>
            </div>
            {episodes ? (<EpisodeList list={list} />) : (<ErrorPage />)}
        </div>
    )
}

export default EpisodesPage