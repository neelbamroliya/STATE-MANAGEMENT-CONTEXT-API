import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const AddMovies = () => {

    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [movies, setMovies] = useContext(MovieContext)


    const updateName = e => {
        setName(e.target.value)
    }
    const updatePrice = e => {
        setPrice(e.target.value)
    }
    const addMovie = e => {
        e.preventDefault();
        setMovies([...movies, { name: name, price: price }])
        setName('')
        setPrice('')
    }
    return (
        <>
            <input type="text" name="name" placeholder="Movie Name" value={name} onChange={updateName} />
            <input type="text" name="price" placeholder="Movie Price" value={price} onChange={updatePrice} />
            <button onClick={addMovie}>Submit</button>

        </>
    )
}

export default AddMovies