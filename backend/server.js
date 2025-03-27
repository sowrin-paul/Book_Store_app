import express from "express";
import cors from "cors";
import { faker } from "@faker-js/faker";

const app = express();
app.use(cors());

app.get("/api/books", (req, res) => {
  const seed = parseInt(req.query.seed) || 42;
  const lang = req.query.lang || "en";
  const page = parseInt(req.query.page) || 1;

  faker.seed(seed + page);

  const books = Array.from({ length: 10 }, (_, index) => {
    return {
      index: (page - 1) * 10 + index + 1,
      isbn: faker.string.uuid().slice(0, 13),
      title: faker.lorem.words(3),
      author: faker.person.fullName(),
      publisher: faker.company.name(),
      year: faker.date.past({ years: 20 }).getFullYear(),
      cover: `https://picsum.photos/seed/${seed + index}/200/300`,
      reviews: Array.from({ length: 3 }, () => ({
        text: faker.lorem.sentence(),
        reviewer: faker.person.fullName(),
      })),
      likes: faker.number.int({ min: 1, max: 100 }),
    };
  });

  res.json(books);
});

app.listen(5000, () => console.log("Server running on port 5000"));