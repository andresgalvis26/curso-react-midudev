import React, {Suspense} from "react";
import Spinner from "../Spinner"
import useNearScreen from '../../hooks/useNearScreen'

// Haciendo uso de React.lazy
// Construyendo import dinámico
const TrendingSearches = React.lazy(
    () => import('./TrendingSearches.js')
)


export default function LazyTrending () {
    // Estado que determine si mostrar o no esta sección de trendings
    const {isNearScreen, fromRef} = useNearScreen({distance: '200px'})
    
    return <div ref={fromRef}>
        <Suspense fallback={null}>
            {isNearScreen ? <TrendingSearches /> : <Spinner />}
        </Suspense>
    </div>

}