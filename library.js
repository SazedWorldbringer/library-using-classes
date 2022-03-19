class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() {
    return this._title;
  }

  get isCheckedOut() {
    return this._isCheckedOut;
  }

  get ratings() {
    return this._ratings;
  }

  // I'm not sure this setter is doing, it just put it there anyways
  set isCheckedOut(bool) {
    this._isCheckedOut = bool;
  }

  // If chedked out status is false, this method turns it to true. Reverses the value.
  toggleCheckOutStatus() {
    this._isCheckedOut = !this._isCheckedOutt;
  }

  // gives average rating of the media
  getAverageRating() {
    // sums up all the ratings in the ratings array
    let ratingsSum = this.ratings.reduce(
      (currentSum, rating) => currentSum + rating,
      0
    );
    const ratingsLen = this.ratings.length;
    // calculates average rating
    const averageRating = ratingsSum / ratingsLen;
    return parseFloat(averageRating).toFixed(2);
  }

  // add rating for the media
  addRating(rating) {
    if (rating >= 1 && rating <= 5) {
      this.ratings.push(rating);
    }
  }
}

// Book class
class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
    this._ratings = [];
  }

  get author() {
    return this._author;
  }

  get pages() {
    return this._pages;
  }
}

// Movie class
class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

// CD class
class CD extends Media {
  constructor(artist, title, songsCount) {
    super(title);
    this._artist = artist;
    this._songsCount = songsCount;
    this._songs = [];
  }

  get artist() {
    return this._artist;
  }

  get songsCount() {
    return this._songsCount;
  }

  get songs() {
    return this._songs;
  }
}

// sample book
const historyOfEverything = new Book(
  "Bill Bryson",
  "A Short History of Nearly Everything",
  544
);

// sample movie
const speed = new Movie("Jan de Bont", "Speed", 116);

// sample movie
const letItBe = new CD("The Beatles", "Let It Be", 12);

// testing the Book class
const bookTest = (book) => {
  book.toggleCheckOutStatus();
  book.addRating(4);
  book.addRating(5);
  book.addRating(5);

  console.log(
    `
${book.title} written by ${book.author} is ${book.pages} pages long,
and has an average rating of ${book.getAverageRating()}
    `
  );
};

// testing the Movie class
const movieTest = (movie) => {
  movie.toggleCheckOutStatus();
  movie.addRating(4);
  movie.addRating(5);
  movie.addRating(5);

  console.log(
    `
${movie.title} directred by ${movie.director} is ${movie.runTime} minutes long,
and has an average rating of ${movie.getAverageRating()}
    `
  );
};

// testing the CD class
const CDTest = (cd) => {
  cd.toggleCheckOutStatus();
  cd.addRating(4);
  cd.addRating(5);
  cd.addRating(5);

  console.log(
    `
${cd.title} by ${cd.artist} has ${cd.songsCount},
and has an average rating of ${cd.getAverageRating()}
    `
  );
};

bookTest(historyOfEverything);
movieTest(speed);
CDTest(letItBe);
