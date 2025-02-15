import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getEpisode } from '../../slices/EpisodeSlice';
import { URL_EPISODE } from '../../constants/API'


import styles from './EpisodesDetailsPage.module.css'
import axios from 'axios';

function EpisodesDetailsPage() {

    const { id } = useParams()

    const dispatch = useDispatch()
    const { episode, isLoading } = useSelector((state) => state.episode)
    const [charImage, setCharImage] = useState([])

    useEffect(() => { dispatch(getEpisode(URL_EPISODE + id)) }, [dispatch])

    useEffect(() => {
        const getImageCharacters = async () => {
            try {
                const res = await Promise.all(episode.characters.map(item => { return axios.get(item) }));
                const list = res.map(res => res.data)
                setCharImage(list)
            } catch (error) {
                console.log(error);
            }
        }
        getImageCharacters()
    }, [episode, dispatch])

    return (
        <div className={styles.container}>
            <Link to="/episode">
                <div className={styles.back__button}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black" />
                    </svg>
                    go back
                </div>
            </Link>
            <div className={styles.episode__info_container}>
                <div><h1>{episode && episode.name}</h1></div>
                <div className={styles.episode__info_inner}>
                    <div>Episode: {episode && episode.episode}</div>
                    <div>Date: {episode && episode.air_date}</div>
                </div>
            </div>
            <div className={styles.character__container}>
                {charImage && charImage.map(item => (
                    <ul className={styles.character__item}>
                        <li className={styles.character__list}>
                            <img src={item.image && item.image} />
                            <div className={styles.character__info__container}>
                                <h3>{item.name ? item.name : "not name"}</h3>
                                {item.species ? item.species : "not species"}
                            </div>
                        </li>
                    </ul>
                ))}
            </div>
        </div>
    )
}

export default EpisodesDetailsPage;