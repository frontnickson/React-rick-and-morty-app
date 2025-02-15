import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './CharacterList.module.css';

function CharacterList({ finishList, activeButton }) {

  const [character, setCharacter] = useState(() => {
    const getCharacter = localStorage.getItem('character')
    return getCharacter ? JSON.parse(getCharacter) : []
  })

  const [list, setList] = useState(8);
  const limit = finishList.slice(0, list);

  const handleList = () => {
    setList(item => item + 10);
  };

  const allList = () => {
    setList(160);
  };

  const getFavorites = (id, item) => {
    if (!character.some(char => char.id === id)) {
      setCharacter([...character, item])
    } else {
      const updateChar = character.filter(charId => charId.id !== id)
      setCharacter(updateChar)
    }
  }

  useEffect(() => { localStorage.setItem('character', JSON.stringify(character)) }, [character])

  return (
    <div>
      <div className={styles.character__container}>
        {limit.map(item => (
          <ul key={item.id} className={styles.character__item}>
            <li className={styles.character__list}>
              <button className={styles.button__add} onClick={() => { getFavorites(item.id, item) }}>{character.some(char => char.id === item.id) ? "delete" : "add"}</button>
              <Link to={`/character/${item.id}`}>
                <img
                  alt='character_image'
                  src={item.image || "https://img.freepik.com/premium-vector/get-this-doodle-icon-404-error_67813-19921.jpg?w=1060"}
                  className={styles.character__image}
                />
                <div className={styles.character__info__container}>
                  <h3>{item.name || "not name"}</h3>
                  {item.species || "not species"}
                </div>
              </Link>
            </li>
          </ul>
        ))}
      </div>

      <div className={styles.character__button_container}>
        <button className={styles.button} onClick={handleList} disabled={activeButton === false || list === 160}>
          Load more
        </button>
        <button className={styles.button} onClick={allList} disabled={list === 160}>
          get all list
        </button>
      </div>
    </div>
  );
}

export default CharacterList;
