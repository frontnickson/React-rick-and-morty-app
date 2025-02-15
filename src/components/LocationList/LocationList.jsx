import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';


import styles from './LocationList.module.css'

function LocationList({ list }) {    
    return (
        <>
            <div className={styles.location__container}>
                {list && list.map(item => (
                    <Link to={`/location/${item.id}`}>
                        <ul key={item.id} className={styles.episodes__item}>
                            <li>
                                <h4>{item.name}</h4>
                                <p>{item.air_date}</p>
                            </li>
                        </ul>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default LocationList