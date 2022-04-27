export default async function handler(req, res) {
  if (req.method == "POST") {
    const booking = req.body;
    // Send to DB
    console.log(booking);
    res.status(201).json({ booking });
  }
}
