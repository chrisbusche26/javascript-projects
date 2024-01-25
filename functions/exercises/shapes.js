const input = require('readline-sync')
let char = input.question('Input character: ');

function makeLine(size) {
    let line = '';

    for (let i = 0; i < size; i++) {
        line += char;
    }
    return line;
}

function makeSquare(size) { 
    let square = makeRectangle(size, size);
    return square;
}

function makeRectangle(width, height) {
    let rectangle = '';

    for (let i = 0; i < height; i++) {
        rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
}

function makeDownwardStairs(height) {
    let stairs = '';

    for (let i = 0; i < height; i++) { 
        stairs += (makeLine(i + 1) + '\n');
    }
    return stairs.slice(0, -1);
}

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';

    for (let i = 0; i < numSpaces; i++) { 
        spaces += ' ';
    }
    let spaceLine = `${spaces + (makeLine(numChars)) + spaces}`;

    return spaceLine;
}

function makeIsoscelesTriangle(height) {
    let triangle = '';
    
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine((height - i - 1), (2 * i + 1)) + '\n');
    }
   
    return triangle.slice(0, -1);
    
}

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

function makeDiamond(height) {
    let diamond =
        makeIsoscelesTriangle(height) + '\n' + reverse(makeIsoscelesTriangle(height));

    return diamond;
}