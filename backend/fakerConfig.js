import seedrandom from "seedrandom";
import { faker } from "@faker-js/faker";

export const getSeededRNG = (seed) => {
  return seedrandom(seed);
};

export const generateFakeBook = (seed, index, lang = "en") => {
  const rng = getSeededRNG(`${seed}-${index}`);

  faker.locale = lang;

  return {
    index: index + 1,
    isbn: faker.string.numeric(3) + "-" + faker.string.numeric(9),
    title: faker.lorem.words(rng() * 3 + 2),
    author: `${faker.person.firstName()} ${faker.person.lastName()}`,
    publisher: faker.company.name(),
    likes: Math.floor(rng() * 10),
    reviews: (rng() * 5).toFixed(1),
  };
};