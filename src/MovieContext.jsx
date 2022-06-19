import React, { useState, createContext } from 'react'

export const MovieContext = createContext();
export const MovieProvider = props => {
    const [movies, setMovies] = useState([
        {
            name: "Money Heist",
            price: "$15",
            id: 123
        },
        {
            name: "Lucifer",
            price: "$12",
            id: 242
        },
        {
            name: "Game of Thrones",
            price: "$17",
            id: 341
        }
    ])
    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}