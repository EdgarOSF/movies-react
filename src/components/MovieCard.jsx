import { Link } from 'react-router-dom';
import styles from './MovieCard.module.css';

export function MovieCard({ movie }) {
  const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
  return (
    <li className={styles.movieCard}>
      <Link to={'/movies/' + movie.id}>
        <img
          width={300}
          height={450}
          className={styles.movieImage}
          src={imageUrl}
          alt={movie.title}
        />
      </Link>
      {movie.title}
    </li>
  );
}
