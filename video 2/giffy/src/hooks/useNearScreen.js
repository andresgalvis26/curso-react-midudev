import React, {useEffect, useState, useRef} from 'react';

export default function useNearScreen({distance = '100px'} = {}) {
    // Estado que determine si mostrar o no esta sección de trendings
    const [isNearScreen, setShow] = useState(false)
    const fromRef = useRef() // Una especie de baúl que entre renderizado guarda los valores, el useRef no renderiza el componente

    useEffect(function () {
    
        let observer;
    
        // Funcion que se ejecutara cuando hayan cambios en la interseción
        const onChange = (entries, observer) => {
            // entries es un array -> Tomamos la primera posición
            const el = entries[0]
            console.log(el.isIntersecting);
            // Cuando se va acercando y se convierte en true, mostrar tendencias
            if (el.isIntersecting) {
                setShow(true);
                observer.disconnect();
                
            }
        }
    
        Promise.resolve(
            typeof IntersectionObserver != 'undefined'
                ? IntersectionObserver
                : import ('intersection-observer')
        ).then(() => {
            // Construir un observer u observador
            observer = new IntersectionObserver(onChange, {
                rootMargin: '100px'
                // Cuando haya una distancia de 100px dirá que el elemento hace interseción con el viewport.
            })
            observer.observe(fromRef.current)
        })
    
        return () => observer && observer.disconnect()
        
    })

    return {isNearScreen, fromRef};
}