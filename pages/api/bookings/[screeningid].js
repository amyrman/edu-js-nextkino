import mongoose from "mongoose";
import dbConnect from "../../../lib/dbConnect";
import Screening from "/models/Booking.js";

export default async function handler(req, res) {
  // mongoose.connect(
  //   ""
  // );

  await dbConnect();

  if (req.method == "PATCH") {
    const booking = req.body;
    console.log(booking);
    res.status(201).json({ booking });
  }

  if (req.method == "GET") {
    const id = Object.values(req.query);
    const prom = await Screening.find({ screeningId: id });
    const screening = prom[0];
    if (screening) {
      res.status(200).json(screening);
    } else {
      res.status(404).end();
    }
  }

  // --> DEVELOPMENT STUFF HERE
  // To add new screenings
  if (req.method == "POST") {
    const screening = new Screening(req.body);
    await screening.save();
    res.status(201).json({ screening });
  }
}
