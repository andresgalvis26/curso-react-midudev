import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;

export function useGifs ({keyword} = { keyword: null}) {
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [page, setPage] = useState(INITIAL_PAGE)
    const {gifs, setGifs} = useContext(GifsContext)
    
    // Recuperamos la keyword del localStorage
    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

    useEffect(function () { 
        setLoading(true);

        // Utilizamos la keyword   
        getGifs({ keyword: keywordToUse })
            .then(gifs => 
                setGifs(gifs))
                setLoading(false)
            // Guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keywordToUse)
    }, [keyword, keywordToUse, setGifs]);

    useEffect(function () {
        if (page === INITIAL_PAGE) return 

        setLoadingNextPage(true)

        getGifs({keyword: keywordToUse, page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                setLoadingNextPage(false)
            })

    }, [page, keywordToUse, setGifs])

    return {gifs, loading, loadingNextPage, setPage};
}
