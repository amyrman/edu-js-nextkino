import dbConnect from '../lib/dbConnect';
import movie from '../models/movie';

export async function getServerSideProps() {
  await dbConnect();

  const result = await movie.find({});
  const movies = result.map((doc) => {
    const movie = doc.toObject();
    movie._id = movie._id.toString();
    return movie;
  });
  console.log(movies);

  return { props: { movies: movies } };
}

const Movie = ({ movies }) => {
  return (
    <div>
      <div>Movie Page</div>
      <ul>
        {movies.map((movie) => {
          return <li key={movie.id}>{movie.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Movie;
