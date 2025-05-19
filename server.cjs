// server.cjs
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/hindtabreed', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const reviewSchema = new mongoose.Schema({
  name: String,
  date: String,
  comment: String,
  rating: Number,
});
const Review = mongoose.model('Review', reviewSchema);

app.get('/api/reviews', async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

app.post('/api/reviews', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
