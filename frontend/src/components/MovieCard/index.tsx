import MovieScore from "components/MovieScore";
import { Link } from 'react-router-dom';
import { Movie } from "types/movie";

// É um objeto que terá dentre umas das propriedades que lhe será passada chamada de movie que será um objeto do tipo Movie
type Props = {
  movie: Movie;
}

function MovieCard({ movie }: Props) {

  return (
    <div>
      <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore score={movie.score} count={movie.count} />
        
        <Link to={`/form/${movie.id}`}>
          <div className="btn btn-primary dsmovie-btn">Avaliar</div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;