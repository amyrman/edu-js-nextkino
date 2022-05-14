import Image from 'next/image';
import Link from 'next/link';

import dbConnect from '../../lib/dbConnect';
import Movie from '../../models/Movie';
import Reviews from '../../components/Reviews';
import Screenings from '../../components/Screenings';

import styles from './moviepage.module.css';

//Possible refactor here for performance. Replace gSSP with conditional, if props (passed from /movies page) render with that data. Else fetch data from dB based on movieId

export const getServerSideProps = async (context) => {
  const movieId = context.query.id;
  await dbConnect();

  const result = await Movie.find({ id: movieId });
  const movie = result.map((doc) => {
    const movieData = doc.toObject();
    // Convert mongoDB document id to string
    movieData._id = movieData._id.toString();
    return movieData;
  });
  if (movie.length === 0) {
    return {
      notFound: true,
    };
  } else {
    return { props: { movie: movie[0] } };
  }
};

const MoviePage = ({ movie }) => {
  return (
    <div className={styles.container}>
      <Reviews reviews={movie.reviews} />

      <Image alt='cover image' src={movie.imgUrl} width={240} height={380} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <p className={styles.description}>{movie.description}</p>
        <Link href={'/movies'}>
          <a className={styles.backBtn}>Back to movies</a>
        </Link>
      </div>
      <Screenings screenings={movie.screenings} />
    </div>
  );
};

export default MoviePage;
