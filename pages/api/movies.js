import dbConnect from '../../lib/dbConnect';
import Movie from '../../models/movie';

export default async function handler(req, res) {
  await dbConnect();

  if (req.method === 'GET') {
    try {
      const movies = await Movie.find(
        {}
      ); /* find all the data in our database */
      res.status(200).json({ success: true, data: movies });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else if (req.method === 'POST') {
    try {
      const movie = await Movie.create(
        req.body
      ); /* create a new model in the database */
      res.status(201).json({ success: true, data: movie });
    } catch (error) {
      res.status(400).json({ success: false });
    }
  } else {
    res.status(400).json({ success: false });
  }
}
