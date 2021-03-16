import { MovieCard } from './MovieCard';


import { GenreResponseProps, MovieProps } from '../@types/Typings'

import '../styles/content.scss';


interface Props {
  movies: MovieProps[]
  selectedGenre: GenreResponseProps
}

export function Content({ movies, selectedGenre }: Props) {
  // Complete aqui
  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
  )
}