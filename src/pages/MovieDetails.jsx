import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../utils/httpClient';
import styles from './MovieDetails.module.css';
import {Spinner} from '../components/Spinner'

export function MovieDetails() {
  const { movieId } = useParams(); // extraemos el parametro de la URL en este caso movieId
  const [ isLoading, setIsLoading ] = useState(true);
  const  [ movie, setMovie ] = useState(null);
  
  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
        setIsLoading(false);
        setMovie(data);
    });
  }, [movieId]);

  if ( true ) {
      return <Spinner />
  }

  if (!movie){
    return null;
  }

  const imageUrl = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
  return (
    <div className={styles.detailsContainer}>
      <img
        className={`${styles.col} ${styles.movieImage}`}
        src={imageUrl}
        alt={movie.title}
      />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p>
          <strong>Title: </strong>
          {movie.title}
        </p>
        <p>
          <strong>Genres: </strong>
          {movie.genres.map((genre) => genre.name).join(', ')}
        </p>
        <p>
          <strong>Description: </strong>
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
