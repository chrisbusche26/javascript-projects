// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, ISBN, numOfPages, numOfCheckOuts, discarded) {
        this.title = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.ISBN = ISBN;
        this.numOfPages = numOfPages;
        this.numOfCheckOuts = numOfCheckOuts;
        this.discarded = discarded;
    }

    checkout(uses=1) {
      this.numOfCheckOuts += uses;
   }
};

// Define your Manual and Novel classes here:
class Manual extends Book{ 
    constructor(title, author, copyrightDate, ISBN, numOfPages, numOfCheckOuts, discarded) {
        super(title, author, copyrightDate, ISBN, numOfPages, numOfCheckOuts, discarded);
    }
        
    dispose(currentYear) {
        if (this.copyrightDate < (currentYear - 5)) {
            this.discarded = "Yes";
        } 
    }
};

class Novel extends Book { 
    constructor(title, author, copyrightDate, ISBN, numOfPages, numOfCheckOuts, discarded) {
        super(title, author, copyrightDate, ISBN, numOfPages, numOfCheckOuts, discarded);
    }
        
    dispose() {
        if (this.numOfCheckOuts > 100) {
            this.discarded = "Yes";
        } 
    }
};

// Declare the objects for exercises 2 and 3 here:
let newNovel = new Novel("Pride and Prejudice", "Jane Austen", 1813, 1111111111111, 432, 32, "No");
let newManual = new Manual("Top Secret Shuttle Building Manual", "Redacted", 2013, '0000000000000', 1147, 1, "No");

// Code exercises 4 & 5 here:
newManual.dispose(2024);
newNovel.checkout(5);

console.log(newManual);
console.log(newNovel);