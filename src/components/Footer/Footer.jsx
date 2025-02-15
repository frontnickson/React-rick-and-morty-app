import React from 'react'
import logo from '../../images/logo.png'

import styles from './styles.module.css'

function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.container}>
        <div>Project</div>
        <div>devoloper by <a href="https://t.me/newn1ik">Putov</a></div>
        <div>2025</div>
      </footer>
    </div>
  )
}

export default Footer;