import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacter } from '../../slices/CharacterSlice';

import ErrorPage from '../ErrorPage/ErrorPage';
import CharacterList from '../../components/CharacterList/CharacterList';

import styles from './CharacterPage.module.css'

function CharacterPage() {
  const dispatch = useDispatch()
  const { character, isLoading } = useSelector((state) => state.character)
  console.log("hello");
  

  const [finishList, setFinishList] = useState([])

  const [value, setValue] = useState('')
  const [activeButton, setActiveButton] = useState(true)
  const [gender, setGender] = useState("Male");
  const [status, setStatus] = useState("Alive");
  const [species, setSpecies] = useState("Human");

  useEffect(() => {
    dispatch(getCharacter());
  }, [dispatch])

  useEffect(() => {
    if (isLoading) {
      const list = character.filter(item => { return item.name.toLowerCase().includes(value) })
      setFinishList(list)
    }
  }, [value, isLoading, character, dispatch])

  useEffect(() => {
    if (isLoading) {
      const genderList = character.filter(item => { return item.gender === gender })
      setFinishList(genderList)
    }
  }, [gender, isLoading, character, dispatch])

  useEffect(() => {
    if (isLoading) {
      const statusList = character.filter(item => { return item.status === status })
      setFinishList(statusList)
    }
  }, [status, isLoading, character, dispatch])

  useEffect(() => {
    if (isLoading) {
      const speciesList = character.filter(item => { return item.species === species })
      setFinishList(speciesList)
    }
  }, [species, isLoading, character, dispatch])


  return (
    <div className={styles.character__container}>
      <div className={styles.character__filter__container}>

        <div className={styles.input__container}>
          <div className={styles.input__icon}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="rgb(156, 156, 156)" /></svg>
          </div>
          <input type="search" onChange={(event) => { setValue(event.target.value); setActiveButton(event.target.value === ''); }} className={styles.input} />
        </div>

        <div className={styles.input__container}>
          <form>
            <select className={styles.select__container} onChange={event => { setGender(event.target.value) }}>
              <option>Male</option>
              <option>Female</option>
              <option>unknown</option>
            </select>
          </form>
        </div>

        <div className={styles.input__container}>
          <form>
            <select className={styles.select__container} onChange={event => { setStatus(event.target.value) }}>
              <option>Alive</option>
              <option>Dead</option>
              <option>unknown</option>
            </select>
          </form>
        </div>

        <div className={styles.input__container}>
          <form>
            <select className={styles.select__container} onChange={event => { setSpecies(event.target.value) }}>
              <option>Human</option>
              <option>Humanoid</option>
              <option>Alien</option>
            </select>
          </form>
        </div>

      </div>
      {character ? (<CharacterList finishList={finishList} activeButton={activeButton} />) : (<ErrorPage />)}
    </div>
  )
}

export default CharacterPage;
