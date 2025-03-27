import express, { json } from 'express';
import { faker } from '@faker-js/faker';
import cors from 'cors';
const app = express();

app.use(cors());

app.use(json());

app.post('/generate-books', (req, res) => {
  const { seed, likes, reviews, region } = req.body;
  locale = region;

  _seed(parseInt(seed));

  const numBooks = 20;
  const books = [];

  for (let i = 0; i < numBooks; i++) {
    const book = generateBook(i + 1, likes, reviews);
    books.push(book);
  }

  res.json(books);
});

function generateBook(index, avgLikes, avgReviews) {
  const title = lorem.words(3);
  const author = name.findName();
  const publisher = company.companyName();
  const isbn = random.uuid();
  const bookLikes = Math.round(random.number({ min: avgLikes - 1, max: avgLikes + 1 }));
  const bookReviews = Math.round(random.number({ min: avgReviews - 1, max: avgReviews + 1 }));

  return {
    index,
    isbn,
    title,
    author,
    publisher,
    likes: bookLikes,
    reviews: bookReviews,
    cover: image.imageUrl(200, 300, 'books', true),
    description: lorem.sentences(3),
  };
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
