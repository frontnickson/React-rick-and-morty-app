import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import styles from './EpisodeList.module.css'

function EpisodeList({ list }) {

    const [limit, setLimit] = useState(12)
    
    const filterList = list.slice(0, limit)
    
    const getLimit = () => {
        setLimit(item => item + 12)
    }

    return (
        <>
            <div className={styles.episodes__container}>
                {list && filterList.map(item => (
                    <Link to={`/episode/${item.id}`}>
                        <ul key={item.id} className={styles.episodes__item}>
                            <li>
                                <h4>{item.name}</h4>
                                <p>{item.air_date}</p>
                            </li>
                        </ul>
                    </Link>
                ))}
            </div>
            <div className={styles.button__container}>
                <button className={styles.button} onClick={getLimit} disabled={limit === 60}>Load more</button>
            </div>
        </>
    )
}

export default EpisodeList;