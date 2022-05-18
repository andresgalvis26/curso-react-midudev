import React from 'react';
import Gif from '../../components/Gif/Gif';
import useGlobalGifs from '../../hooks/useGlobalGifs';

export default function Detail ({ params }) {

    const gifs = useGlobalGifs(); 
    //console.log(gifsContext);

    const gif = gifs.find(singleGif => singleGif.id === params.id)
    
    return <Gif {...gif} />
}