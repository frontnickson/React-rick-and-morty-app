import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getPerson } from '../../slices/PersonSlice'
import { URL_CHARACTER } from '../../constants/API';


import notimage from '../../images/notimage.jpg'
import styles from './PersonPage.module.css'

function PersonPage() {


  const { id } = useParams();
  const dispatch = useDispatch()
  const { person } = useSelector((state) => state.person)

  useEffect(() => { dispatch(getPerson(URL_CHARACTER + id)) }, [id, dispatch])

  return (
    <div className={styles.container}>
      <div className={styles.container__info}>
        <Link to="/character">
          <div className={styles.back__button}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z" fill="black" />
            </svg>
            go back
          </div>
        </Link>
        <div>
          <img alt='person_image' src={person ? person.image : notimage} className={styles.image} />
        </div>
        <div>
          <h1>{person ? person.name : "Not name"}</h1>
        </div>
        <div className={styles.container__characters}>
          <div className={styles.box_character}>
            <ul className={styles.characters__item}>
              <h2>information</h2>
              <li><h4>Gender:</h4><br/><p style={{color: "grey", marginBottom: "10px"}}>{person ? person.gender : "Not gender"}</p></li>
              <li><h4>Species:</h4><br/><p style={{color: "grey", marginBottom: "10px"}}>{person ? person.species : "Not species"}</p></li>
              <li><h4>Status:</h4><br/><p style={{color: "grey", marginBottom: "10px"}}>{person ? person.status : "Not status"}</p></li>
            </ul>
          </div>
          <div className={styles.box_character}>
            <ul className={styles.characters__item}>
              <h2>Episodes</h2>
              <li><h4>Status:</h4><br/><p style={{color: "grey", marginBottom: "10px"}}>{person ? person.status : "Not status"}</p></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonPage