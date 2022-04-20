import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  imgUrl: String,
});

export default mongoose.models.Movie || mongoose.model('Movie', MovieSchema);
