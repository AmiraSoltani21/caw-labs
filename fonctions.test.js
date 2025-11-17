
const { first, last, concatenate, chunk } = require('./fonctions');

describe('first()', () => {
    test('returns first element if n is null', () => {
        expect(first([10, 20, 30])).toBe(10);
    });
    test('returns first 2 elements', () => {
        expect(first([10, 20, 30], 2)).toEqual([10, 20]);
    });
    test('returns empty array if n <= 0', () => {
        expect(first([10, 20], 0)).toEqual([]);
    });
});

describe('last()', () => {
    test('returns last element if n is null', () => {
        expect(last([10, 20, 30])).toBe(30);
    });
    test('returns last 2 elements', () => {
        expect(last([10, 20, 30], 2)).toEqual([20, 30]);
    });
    test('returns empty array if input is empty', () => {
        expect(last([], 2)).toEqual([]);
    });
});

describe('concatenate()', () => {
    const myColor = ["Red", "Green", "White", "Black"];
    test('concatenates with toString', () => {
        expect(myColor.toString()).toBe("Red,Green,White,Black");
    });
    test('concatenates with join()', () => {
        expect(concatenate(myColor)).toBe("RedGreenWhiteBlack");
    });
    test('concatenates with join with comma', () => {
        expect(concatenate(myColor, ',')).toBe("Red,Green,White,Black");
    });
});

describe('chunk()', () => {
    test('splits array into chunks of size 2', () => {
        expect(chunk([1,2,3,4,5], 2)).toEqual([[1,2],[3,4],[5]]);
    });
    test('splits array into chunks of size 3', () => {
        expect(chunk([1,2,3,4,5,6,7], 3)).toEqual([[1,2,3],[4,5,6],[7]]);
    });
    test('returns empty array if size <= 0', () => {
        expect(chunk([1,2,3], 0)).toEqual([]);
    });
});
