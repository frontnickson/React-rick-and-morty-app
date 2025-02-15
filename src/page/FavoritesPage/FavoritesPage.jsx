import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'



import styles from './FavoritesPage.module.css'

function FavoritesPage() {

    const [char, setChar] = useState(() => {
        const listChar = localStorage.getItem('character')
        return listChar ? JSON.parse(listChar) : []
    })

    const deleteChar = (id) => {
        if (char.some(item => item.id === id)) {
            const updateChar = char.filter(charId => charId.id !== id)
            setChar(updateChar)
        }
    }

    useEffect(() => { localStorage.setItem('character', JSON.stringify(char)) }, [char])

    return (
        <div className={styles.container}>
            {char.length > 0 ? char.map(item => (
                <ul key={item.id}>
                    <li className={styles.favorites__list}>
                        <img src={char && item.image} className={styles.image} />
                        {item.name}
                        <button className={styles.button} onClick={() => { deleteChar(item.id) }}>delete</button>
                    </li>
                </ul>
            )) : (
                <div>
                    <h1>List characters is empty</h1>
                    <p>go to the <Link to="/character"><u>character</u></Link></p>
                </div>
            )}
        </div>
    )
}

export default FavoritesPage