import Image from 'next/image';

import dbConnect from '../../lib/dbConnect';
import Movie from '../../models/movie';

import styles from './moviepage.module.css';

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
  return (
    <div className={styles.container}>
      <div>Reviews Section</div>
      <Image alt='cover image' src={movie.imgUrl} width={240} height={380} />
      <div>
        <h1 className={styles.title}>{movie.title}</h1>
        <p>{movie.description}</p>
      </div>
      <div>Screenings Secrtion</div>
    </div>
  );
};

export default MoviePage;
