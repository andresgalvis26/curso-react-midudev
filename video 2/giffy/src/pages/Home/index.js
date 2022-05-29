import React, { useCallback } from "react";
import { useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";
import TrendingSearches from "../../components/TrendingSearches";
import SearchForm from "../../components/SearchForm";

export default function Home() {
    const [path, pushLocation] = useLocation();
    const { gifs } = useGifs();

    // Esta función se ejecutará cuando se haga submit del formulario
    const handleSubmit = useCallback(({keyword}) => {
        // Navegar a otra ruta
        pushLocation(`/search/${keyword}`)
    }, [pushLocation])

    return (
        <>
            <SearchForm onSubmit={handleSubmit} />
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