import { MovieCard } from "./MovieCard";
import { useEffect, useState } from "react";
// import movies from "./movies.json";
import styles from "./MoviesGrid.module.css";
import { get } from "../utils/httpClient";
import { Spinner } from "./Spinner";
// import { useLocation } from "react-router-dom";
import { useQuery } from "../hooks/UseQuery";


export function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    // const location = useLocation();
    const query = useQuery();      
    
    const search = query.get("search");    

    useEffect(()=>{
        setIsLoading(true);
        const urlSearch = search ? "/search/movie?query=" + search
        : "/discover/movie"
        get(urlSearch).then( data => {
            setMovies(data.results);
            setIsLoading(false);
        })
    }, [search]);

    if ( isLoading ) {
        <Spinner />
    }

    return (
        <ul className={styles.moviesGrid}>
            {movies.map((movie) => 
                <MovieCard key={movie.id} movie={movie} /> 
            )}
        </ul>
    )
}