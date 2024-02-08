const checkFive = require('../checkFive.js');

describe('checkFive', function () {
    
    //Checks less than 5
    test('should return true if less than 5', function () {
        let output = checkFive.checkFive(2);
        expect(output).toEqual('2 is less than 5.');
    });

    //Checks equal to 5
    test('should return true if equal to 5', function () {
        let output = checkFive.checkFive(5);
        expect(output).toEqual('5 is equal to 5.');
    });

    //Checks greater than 5
    test('should return true if greater than 5', function () {
        let output = checkFive.checkFive(7);
        expect(output).toEqual('7 is greater than 5.');
    });
});