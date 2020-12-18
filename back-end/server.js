const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

var ReviewSchema = new mongoose.Schema({
  title: String,
  author: String,
  rating: String,
});

var Book_data = mongoose.model('book_data', ReviewSchema);
mongoose.connect('mongodb://localhost:27017/book_reviews', {
  useNewUrlParser: true
});

app.post('/api/book_data', async (req, res) => {
  var review = new Book_data({
    title: req.body.title,
    author: req.body.author,
    rating: req.body.rating,
  });
  try {
    await review.save();
    res.send(review);
  } catch(error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.get('/api/book_data', async (req, res) => {
  try {
    let reviews = await Book_data.find();
    console.log(reviews);
    res.send(reviews);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});


app.delete('/api/book_data/:id', async(req, res) =>  {
  try{
    await Book_data.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});
// connect to the database



app.listen(3000, () => console.log('Server listening on port 3000!'));
