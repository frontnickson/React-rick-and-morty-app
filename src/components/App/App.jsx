import React from 'react'
import AppRoutes from '../../routes/AppRoutes'
import Header from '../Header/Header'
import Footer from '../Footer/Footer';

import styles from './App.module.css'

function App() {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.main}>
        <AppRoutes />
      </div>

      <Footer />
    </div>
  )
}

export default App