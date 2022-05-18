import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

const POPULAR_GIFS = [''];

export default function Home() {

    const [keyword, setKeyword] = useState('');
    const [path, pushLocation] = useLocation();
    const { gifs } = useGifs();

    // Esta función se ejecutará cuando se haga submit del formulario
    const handleSubmit = e => {

        // Evitar comportamiento por defecto de recarga
        e.preventDefault();

        // Navegar a otra ruta
        pushLocation(`/search/${keyword}`)

    }

    // Esta función se ejecutará cada vez que se cambie el input
    const handleChange = e => {

        // Cada vez que escribamos, actualizamos el estado
        setKeyword(e.target.value);

    }

    return (
        <>
            <h2 className="App-title">Los gifs más populares:</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..."></input>
            </form>
            <h2 className="App-title">Última búsqueda:</h2>
            <ListOfGifs gifs={gifs} />
           {/*  <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul> */}
        </>
    )
}