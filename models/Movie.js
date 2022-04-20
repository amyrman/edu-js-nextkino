import mongoose from 'mongoose';

/* PetSchema will correspond to a collection in your MongoDB database. */
const MovieSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
});

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
