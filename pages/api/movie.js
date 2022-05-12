import dbConnect from '../../lib/dbConnect';
import Movie from '../../models/movie';

export default async function handler(req, res) {
  await dbConnect();
  const movieId = req.query.movieid;

  if (req.method === 'GET') {
    try {
      const movies = await Movie.find({
        id: movieId,
      });
      res.status(200).json({ success: true, data: movies });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
}
