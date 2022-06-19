import React, { useContext } from 'react'
import "./Navbar.css"
import { MovieContext } from './MovieContext'

const Navbar = () => {
    const [movies, setMovies] = useContext(MovieContext)
    return (
        <div className='navbar'>
            <h2 className='navbar__header'>State Management</h2>
            <h2 className='navbar__list'>No. of Movies:{movies.length}</h2>
        </div>
    )
}

export default Navbar