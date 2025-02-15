import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLocation } from '../../slices/LocationSlice';


import LocationList from '../../components/LocationList/LocationList';
import ErrorPage from '../ErrorPage/ErrorPage';


import styles from './LocationPage.module.css'

function LocationPage() {

    const dispatch = useDispatch()
    const { location, isLoading } = useSelector((state) => state.location)
    
    const [list, setList] = useState([])
    
    
    const [typeLocation, setTypeLocation] = useState('unknown')
    const [dimension, setDimension] = useState('unknown')
    const [value, setValue] = useState('')

    useEffect(() => { dispatch(getLocation()) }, [dispatch])

    useEffect(() => {
        if (isLoading) {
            const filterlist = location.results.filter(item => { return item.name.includes(value) })
            setList(filterlist)
        }
    }, [location, value, isLoading])

    useEffect(() => {
        if (isLoading) {
            const filterType = location.results.filter(item => { return item.type === typeLocation })
            setList(filterType)
        }
    }, [location, typeLocation, isLoading])

    useEffect(() => {
        if (isLoading) {
            const filterDemension = location.results.filter(item => item.dimension === dimension)
            setList(filterDemension)
        }
    }, [location, dimension, isLoading])

    return (
        <div className={styles.container}>
            <div className={styles.filter__container}>
                <div className={styles.search__container}>
                    <div className={styles.input__icon}>
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z" fill="rgb(156, 156, 156)" /></svg>
                    </div>
                    <input className={styles.input} type='search' placeholder='Search all locations...' onChange={(event) => { setValue(event.target.value) }} />
                </div>
                <form className={styles.form__container}>
                    <select className={styles.form} onChange={(event) => setTypeLocation(event.target.value)}>
                        <option>Microverse</option>
                        <option>Resort</option>
                        <option>Planet</option>
                        <option>Space station</option>
                    </select>
                    <select className={styles.form} onChange={(event) => setDimension(event.target.value)}>
                        <option>Dimension C-137</option>
                        <option>Post-Apocalyptic Dimension</option>
                        <option>Replacement Dimension</option>
                    </select>
                </form>
            </div>
            {location ? (<LocationList list={list} />) : (<ErrorPage />)}
        </div>
    )
}

export default LocationPage;