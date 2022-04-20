import dbConnect from '../../lib/dbConnect';
import Movie from '../../models/movie';

export async function getServerSideProps(context) {
  const movieId = context.query.id;
  await dbConnect();

  const result = await Movie.find({ id: movieId });
  const movie = result.map((doc) => {
    const movieData = doc.toObject();
    // Convert mongoDB document id to string
    movieData._id = movieData._id.toString();
    return movieData;
  });

  return { props: { movie: movie[0] } };
}

const MoviePage = ({ movie }) => {
  console.log(movie);
  return (
    <div>
      <div>Movie Page</div>
      <ul>
        <li key={movie.id}>{movie.title}</li>
      </ul>
    </div>
  );
};

export default MoviePage;
