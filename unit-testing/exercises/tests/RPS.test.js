const whoWon = require('../RPS.js');

describe('whoWon', function () {

    test('should return tie is both players pick the same', function () {
        let output = whoWon.whoWon('rock', 'rock');
        expect(output).toEqual('TIE!');
    });

    test('should return true if player 2 wins', function () {
        let output = whoWon.whoWon('rock', 'paper');
        expect(output).toEqual('Player 2 wins!');
    });

    test('should return true if player 2 wins', function () {
        let output = whoWon.whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!');
    });

    test('should return true if player 2 wins', function () {
        let output = whoWon.whoWon('paper', 'scissors');
        expect(output).toEqual('Player 2 wins!');
    });

    test('should return true if player 1 wins', function () {
        let output = whoWon.whoWon('rock', 'scissors');
        expect(output).toEqual('Player 1 wins!');
    });
});