import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext';

export function useGifs ({keyword} = { keyword: null}) {
    
    const {gifs, setGifs} = useContext(GifsContext);
    
    useEffect(function () { 
        // Recuperamos la keyword del localStorage
        const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';

        // Utilizamos la keyword   
        getGifs({ keyword: keywordToUse })
            .then(gifs => 
                setGifs(gifs))
            // Guardamos la keyword en el localStorage
            localStorage.setItem('lastKeyword', keywordToUse)
    }, [keyword, setGifs]);

    return {gifs};
}
