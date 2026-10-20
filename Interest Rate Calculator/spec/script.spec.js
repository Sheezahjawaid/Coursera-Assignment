const { calculate, calculateInterest } = require('../src/script.js');

describe("Interest Rate Calculator Tests", function() {
    it("should calculate correct simple interest for valid numbers", function() {
        const fn = calculate || calculateInterest;
        const result = fn(1000, 5, 2);
        expect(result).toBe(100);
    });

    it("should properly parse string input values into numbers and calculate interest", function() {
        const fn = calculate || calculateInterest;
        const result = fn("2000", "3.5", "3");
        expect(result).toBe(210);
    });
});
