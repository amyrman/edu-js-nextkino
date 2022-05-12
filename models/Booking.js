import mongoose from "mongoose";

const ScreeningSchema = new mongoose.Schema({
  screeningId: String,
  movieId: String,
  title: String,
  date: String,
  time: String,
  seats: [
    {
      placement: Number,
      available: Boolean,
      bookingId: String,
      userId: String,
    },
  ],
});

export default mongoose.models.Screening ||
  mongoose.model("Screening", ScreeningSchema);
