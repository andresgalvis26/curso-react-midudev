import React from "react";
import ListOfGifs from '../../components/ListOfGifs/index'
import { useGifs } from "../../hooks/useGifs";

export default function SearchResults ({ params }) {

    const { keyword } = params;
    const { gifs } = useGifs({keyword})

    return <>
        <ListOfGifs gifs={gifs}/>
    </>

}