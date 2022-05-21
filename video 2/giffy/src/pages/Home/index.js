import React, { useState } from "react";
import { Link } from "wouter";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import Category from '../../components/Category';
import TrendingSearches from "../../components/TrendingSearches";

const POPULAR_GIFS = ["Matrix", "Colombia", "Red Bull", "F1"];

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
            <form onSubmit={handleSubmit}>
                <button>Buscar</button>
                <input onChange={handleChange} type="text" value={keyword} placeholder="Search a gif here..."></input>
            </form>
            <div className="App-main">
                <div className="App-results">
                    <h2 className="App-title">Última búsqueda: </h2>
                    <ListOfGifs gifs={gifs} />
                </div>
                <div className="App-category">
                    <TrendingSearches />
                </div>
            </div>
        </>
    )
}