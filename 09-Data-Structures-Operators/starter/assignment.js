const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...players) {
    console.log(`${players.length} goals were scored.`);
    for (let i = 0; i < players.length; i++) {
      console.log(players[i]);
    }
  },
};

let sum = 0;
let avgOdds;

for (const num of Object.values(game.odds)) {
  sum += num;
  avgOdds = sum / 3;
}
console.log(avgOdds);
console.log(Object.entries(game.odds));
for ([team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}

for (const [index, player] of Object.entries(game.scored)) {
  console.log(`${player} scored ${Number(index) + 1}.`);
}

console.log(game.scored);
const scorers = {};
for (const nume of game.scored) {
  scorers[nume] = (scorers[nume] || 0) + 1;
}
console.log(scorers);
// game.printGoals(...game.scored);

// let [players1, players2] = game.players;
// console.log(players1, players2);
// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);
// const playersFinal = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// console.log(playersFinal);
// const { team1, x: draw, team2 } = game.odds;
// console.log(`It is likely that ${team1 < team2 ? 'team1' : 'team2'} wins.`);
// console.log(team1, draw, team2);
// game.printGoals('Lewandowski', 'Kimmich');

// team1 < team2 && console.log('Team 1 is more likely to win.');
// team2 < team1 && console.log('Team 2 is more likely to win.');

// const books = [
//   {
//     title: 'Algorithms',
//     author: ['Robert Sedgewick', 'Kevin Wayne'],
//     publisher: 'Addison-Wesley Professional',
//     publicationDate: '2011-03-24',
//     edition: 4,
//     keywords: [
//       'computer science',
//       'programming',
//       'algorithms',
//       'data structures',
//       'java',
//       'math',
//       'software',
//       'engineering',
//     ],
//     pages: 976,
//     format: 'hardcover',
//     ISBN: '9780321573513',
//     language: 'English',
//     programmingLanguage: 'Java',
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.41,
//         ratingsCount: 1733,
//         reviewsCount: 63,
//         fiveStarRatingCount: 976,
//         oneStarRatingCount: 13,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Structure and Interpretation of Computer Programs',
//     author: [
//       'Harold Abelson',
//       'Gerald Jay Sussman',
//       'Julie Sussman (Contributor)',
//     ],
//     publisher: 'The MIT Press',
//     publicationDate: '2022-04-12',
//     edition: 2,
//     keywords: [
//       'computer science',
//       'programming',
//       'javascript',
//       'software',
//       'engineering',
//     ],
//     pages: 640,
//     format: 'paperback',
//     ISBN: '9780262543231',
//     language: 'English',
//     programmingLanguage: 'JavaScript',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.36,
//         ratingsCount: 14,
//         reviewsCount: 3,
//         fiveStarRatingCount: 8,
//         oneStarRatingCount: 0,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: "Computer Systems: A Programmer's Perspective",
//     author: ['Randal E. Bryant', "David Richard O'Hallaron"],
//     publisher: 'Prentice Hall',
//     publicationDate: '2002-01-01',
//     edition: 1,
//     keywords: [
//       'computer science',
//       'computer systems',
//       'programming',
//       'software',
//       'C',
//       'engineering',
//     ],
//     pages: 978,
//     format: 'hardcover',
//     ISBN: '9780130340740',
//     language: 'English',
//     programmingLanguage: 'C',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 4.44,
//         ratingsCount: 1010,
//         reviewsCount: 57,
//         fiveStarRatingCount: 638,
//         oneStarRatingCount: 16,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'Operating System Concepts',
//     author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
//     publisher: 'John Wiley & Sons',
//     publicationDate: '2004-12-14',
//     edition: 10,
//     keywords: [
//       'computer science',
//       'operating systems',
//       'programming',
//       'software',
//       'C',
//       'Java',
//       'engineering',
//     ],
//     pages: 921,
//     format: 'hardcover',
//     ISBN: '9780471694663',
//     language: 'English',
//     programmingLanguage: 'C, Java',
//     onlineContent: false,
//     thirdParty: {
//       goodreads: {
//         rating: 3.9,
//         ratingsCount: 2131,
//         reviewsCount: 114,
//         fiveStarRatingCount: 728,
//         oneStarRatingCount: 65,
//       },
//     },
//   },
//   {
//     title: 'Engineering Mathematics',
//     author: ['K.A. Stroud', 'Dexter J. Booth'],
//     publisher: 'Palgrave',
//     publicationDate: '2007-01-01',
//     edition: 14,
//     keywords: ['mathematics', 'engineering'],
//     pages: 1288,
//     format: 'paperback',
//     ISBN: '9781403942463',
//     language: 'English',
//     programmingLanguage: null,
//     onlineContent: true,
//     thirdParty: {
//       goodreads: {
//         rating: 4.35,
//         ratingsCount: 370,
//         reviewsCount: 18,
//         fiveStarRatingCount: 211,
//         oneStarRatingCount: 6,
//       },
//     },
//     highlighted: true,
//   },
//   {
//     title: 'The Personal MBA: Master the Art of Business',
//     author: 'Josh Kaufman',
//     publisher: 'Portfolio',
//     publicationDate: '2010-12-30',
//     keywords: ['business'],
//     pages: 416,
//     format: 'hardcover',
//     ISBN: '9781591843528',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.11,
//         ratingsCount: 40119,
//         reviewsCount: 1351,
//         fiveStarRatingCount: 18033,
//         oneStarRatingCount: 1090,
//       },
//     },
//   },
//   {
//     title: 'Crafting Interpreters',
//     author: 'Robert Nystrom',
//     publisher: 'Genever Benning',
//     publicationDate: '2021-07-28',
//     keywords: [
//       'computer science',
//       'compilers',
//       'engineering',
//       'interpreters',
//       'software',
//       'engineering',
//     ],
//     pages: 865,
//     format: 'paperback',
//     ISBN: '9780990582939',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.7,
//         ratingsCount: 253,
//         reviewsCount: 23,
//         fiveStarRatingCount: 193,
//         oneStarRatingCount: 0,
//       },
//     },
//   },
//   {
//     title: 'Deep Work: Rules for Focused Success in a Distracted World',
//     author: 'Cal Newport',
//     publisher: 'Grand Central Publishing',
//     publicationDate: '2016-01-05',
//     edition: 1,
//     keywords: ['work', 'focus', 'personal development', 'business'],
//     pages: 296,
//     format: 'hardcover',
//     ISBN: '9781455586691',
//     language: 'English',
//     thirdParty: {
//       goodreads: {
//         rating: 4.19,
//         ratingsCount: 144584,
//         reviewsCount: 11598,
//         fiveStarRatingCount: 63405,
//         oneStarRatingCount: 1808,
//       },
//     },
//     highlighted: true,
//   },
// ];

// function getFirstKeyword(obj) {
//   console.log(obj.keywords?.keywords[0]) ??
//     console.log(`Keywords property does not exist.`);
// }

// function getFirstKeyword(book) {
//   return book.keywords?.[0];
// }

// for (const book of books) {
//   console.log(`Book: ${book.title}`);
//   getFirstKeyword(book);
// }

// const [firstBook, secondBook] = books;
// console.log(firstBook, secondBook);
// const [, , thirdBoodk] = books;
// console.log(thirdBoodk);

// const ratings = [
//   ['rating', 4.19],
//   ['ratingsCount', 144584],
// ];

// const [[, rating], [, ratingsCount]] = ratings;

// console.log(rating, ratingsCount);

// const ratingStars = [63405, 1808];
// const [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;
// console.log(fiveStarRatings, oneStarRatings, threeStarRatings);

// const { title, author, ISBN } = firstBook;
// console.log(title, author, ISBN);
// const { keywords: tags } = firstBook;
// console.log(tags);

// const seventhBook = books[6];
// const { language, programmingLanguage = 'unknown' } = seventhBook;
// console.log(language, programmingLanguage);

// let bookTitle = 'unknown';
// let bookAuthor = 'unknown';
// ({ title: bookTitle, author: bookAuthor } = books[0]);
// console.log(bookTitle, bookAuthor);

// const {
//   thirdParty: {
//     goodreads: { rating: booksRatings },
//   },
// } = books[0];
// console.log(booksRatings);

// const printBookInfo = function (obj) {
//   console.log(
//     `${obj.title} by ${
//       obj.author.length == 1 || typeof obj.author === 'string'
//         ? obj.author
//         : [...obj.author].toString().replaceAll(',', ' & ')
//     }, ${obj.year ? obj.year : 'year unknown'}`
//   );
// };
// printBookInfo(books[0]);
// printBookInfo(books[3]);
// printBookInfo({ title: 'Algorithms', author: 'Robert Sedgewick', year: 2023 });

// const bookAuthors = [...books[0].author, ...books[1].author];
// console.log(bookAuthors);

// const spellWord = function (str) {
//   console.log(...str);
// };
// spellWord('Javascript');

// const [mainKeyword, ...rest] = books[0].keywords;
// console.log(mainKeyword, rest);

// const { publisher: bookPublisher, ...restOfTheBook } = books[1];
// console.log(bookPublisher, restOfTheBook);
// const printBookAuthorsCount = function (title, ...authors) {
//   console.log(authors);
//   console.log(`The book ${title} has ${authors.length} authors`);
// };
// printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// const hasExamplesInJava = function (obj) {
//   return obj.programmingLanguage === 'Java' || 'No data available';
// };
// console.log(hasExamplesInJava(books[3]));

// for (const book of books) {
//   book.onlineContent && console.log(`"${book.title}" provides online content.`);
// }
// for (const book of books) {
//   book.onlineContent ??
//     console.log(`"${book.title}" provides no data about its online content.`);
// }
// for (const book of books) {
//   book.edition ||= 1;
// }

// for (const book of books) {
//   book.highlighted &&= !book.thirdParty.goodreads.rating < 4.2 == false;
// }
// const bookData = [
//   ['title', 'Computer Networking: A Top-Down Approach'],
//   ['author', ['James F. Kurose', 'Keith W. Ross']],
//   ['publisher', 'Addison Wesley'],
// ];

// Do the rest
// const newBook = {
//   [bookData[0][0]]: bookData[0][1],
//   [bookData[1][0]]: bookData[1][1][0],
//   [bookData[2][0]]: bookData[2][1],
// };

// for (const nume of Object.entries(game.scored)) console.log(newBook);

// const pages = 880;

// const newBook2 = {
//   title: 'The C Programming Language',
//   author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
//   pages,
// };

// console.log(newBook2);
// getFirstKeyword(newBook2);

// const entriesArr = [];

// const goodArr = Object.keys(books[0].thirdParty.goodreads);
// console.log(goodArr);
// for (const key of goodArr) {
//   entriesArr.push([key]);
// }
// console.log(entriesArr);
// const entries2 = entriesArr;
// for (const [index, value] of Object.values(
//   books[0].thirdParty.goodreads
// ).entries()) {
//   entries2[index].push(value);
// }
// console.log(entriesArr);
// console.log(entries2);
