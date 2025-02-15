import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../images/logo.png'

import styles from './Header.module.css'

function Header() {

  const [character, setCharacter] = useState(() => {
    const getCharacter = localStorage.getItem('character')
    return getCharacter ? JSON.parse(getCharacter) : []
  })

  useEffect(() => {}, [])

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <Link to="/character"><img src={logo} /></Link>

        <nav>
          <ul className={styles.header__list}>
            <NavLink to="/character"><li>Characters</li></NavLink>
            <NavLink to="/location"><li>Locations</li></NavLink>
            <NavLink to="/episode"><li>Episodes</li></NavLink>
          </ul>
        </nav>

        <div className={styles.header__icons}>
          <Link to="/favorites">
            <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" fill={character.length > 0 ? "gold" : "black"} />
            </svg>
          </Link>
        </div>
      </header>
    </div>
  )
}

export default Header