import dbConnect from '../lib/dbConnect';
import Movie from '../models/movie';
import Image from 'next/image';
import Link from 'next/link';

import styles from './movies.module.css';

const MoviesPage = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <div key={movie._id}>
        <div>
          <Link href={`/movies/${encodeURIComponent(movie.id)}`}>
          <Image
          src={movie.imgUrl}
          alt="movie picture"
          width={500}
          height={500}
          />
            {/* <a>{movie.title}</a> */}
          </Link>
        </div>
      </div>
    ))}
  </>
)

/* Retrieve movies data from mongodb database */
export async function getServerSideProps() {
  await dbConnect();

  const result = await Movie.find({})
  const movies = result.map((doc) => {
    const movie = doc.toObject()
    movie._id = movie._id.toString()
    return movie
  })

  return { props: { movies: movies } }
}

export default MoviesPage
