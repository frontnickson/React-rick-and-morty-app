import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacter } from '../../slices/CharacterSlice';

// Components
import ErrorPage from '../ErrorPage/ErrorPage';
import CharacterList from '../../components/CharacterList/CharacterList';
import CharacterFilter from '../../components/CharacterFilter/CharacterFilter';

// Styles
import styles from './CharacterPage.module.css'

function CharacterPage() {

  const dispatch = useDispatch()

  const { character, isLoading } = useSelector((state) => state.character)

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

      <CharacterFilter setGender={setGender} setStatus={setStatus} setSpecies={setSpecies} setActiveButton={setActiveButton} setValue={setValue} />
      {character ? (<CharacterList finishList={finishList} activeButton={activeButton} />) : (<ErrorPage />)}
      
    </div>
  )
}

export default CharacterPage;
