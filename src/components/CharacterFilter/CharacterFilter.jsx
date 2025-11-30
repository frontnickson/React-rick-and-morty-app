import React from 'react';

import styles from './CharacterFilter.module.css'

const list_gender = [
    {
        id: 1,
        title: "Male",
        active: false
    },
    {
        id: 2,
        title: "Female",
        active: false
    },
    {
        id: 3,
        title: "Unknown",
        active: false
    },
]

const list_live = [
    {
        id: 1,
        title: "Alive",
        active: false
    },
    {
        id: 2,
        title: "Dead",
        active: false
    },
    {
        id: 3,
        title: "Unknown",
        active: false
    },
]

const list_type = [
    {
        id: 1,
        title: "Human",
        active: false
    },
    {
        id: 2,
        title: "Humanoid",
        active: false
    },
    {
        id: 3,
        title: "Alien",
        active: false
    },
]

function CharacterFilter({ setValue, setGender, setStatus, setSpecies, setActiveButton }) {
    return (
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
                        {list_gender.map((item) => (<option key={item.id}>{item.title}</option>))}
                    </select>
                </form>
            </div>

            <div className={styles.input__container}>
                <form>
                    <select className={styles.select__container} onChange={event => { setStatus(event.target.value) }}>
                        {list_live.map((item) => (<option key={item.id}>{item.title}</option>))}
                    </select>
                </form>
            </div>

            <div className={styles.input__container}>
                <form>
                    <select className={styles.select__container} onChange={event => { setSpecies(event.target.value) }}>
                        {list_type.map((item) => (<option key={item.id}>{item.title}</option>))}
                    </select>
                </form>
            </div>

        </div>
    );
}

export default CharacterFilter;
