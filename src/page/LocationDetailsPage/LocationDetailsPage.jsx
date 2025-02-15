import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { getLoc } from '../../slices/LocSlice';

import { URL_LOCATION } from '../../constants/API';


import styles from './LocationDetailsPage.module.css'
import axios from 'axios';

function LocationDetailsPage() {
  const dispatch = useDispatch()
  const { loc } = useSelector((state) => state.loc)

  const { id } = useParams()
  const [residents, setResidents] = useState([]);

  useEffect(() => { dispatch(getLoc(URL_LOCATION + id)) }, [id, dispatch])

  useEffect(() => {
    const getResidents = async () => {
      try {
        const res = await Promise.all(loc.residents.map(item => { return axios.get(item) }))
        const list = res.map(res => res.data)
        setResidents(list)
      } catch (error) {
        console.log(error);
      }
    }

    getResidents()
  }, [dispatch])

  return (
    <div className={styles}>
      <div className={styles.container}>

        <Link to="/location">
          <div className={styles.back__button}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black" /></svg>
            go back
          </div>
        </Link>

        <div className={styles.loc__info_container}>
          <div><h1>{loc && loc.name}</h1></div>
          <div className={styles.episode__info_inner}>
            <div key={loc.id}>Type: {loc && loc.type}</div>
          </div>
        </div>

        <div className={styles.character__container}>
          {residents && residents.map(item => (
            <ul className={styles.character__item}>
              <li className={styles.character__list}>
                <img alt='location_image' src={item.image && item.image} />
                <div className={styles.character__info__container}>
                  <h3>{item.name ? item.name : "not name"}</h3>
                  {item.species ? item.species : "not species"}
                </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LocationDetailsPage;