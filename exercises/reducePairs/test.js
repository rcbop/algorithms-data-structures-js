const reducePairs = require('./index');

test('function reducePairs exists', () => {
    expect(typeof reducePairs).toEqual('function');
});


test('reducePairs test case 1 ## len = 1', () => {
    const input = "C";

    const output = reducePairs(input);

    let expectedOutput = "C";

    expect(output).toEqual(expectedOutput);
});

test('reducePairs test case 2 ## len = 2', () => {
    const input = "CC";

    const output = reducePairs(input);

    let expectedOutput = "";

    expect(output).toEqual(expectedOutput);
});

test('reducePairs test case 3 ## len = 0', () => {
    const input = "";

    const output = reducePairs(input);

    let expectedOutput = "";

    expect(output).toEqual(expectedOutput);
});


test('reducePairs test case 4 ## len = 6', () => {
    const input = "ABBBBA";

    const output = reducePairs(input);

    let expectedOutput = "";

    expect(output).toEqual(expectedOutput);
});

test('reducePairs test case 5 ## len = 6 ', () => {
    const input = "ABBABA";

    const output = reducePairs(input);

    let expectedOutput = "BA";

    expect(output).toEqual(expectedOutput);
});

test('reducePairs test case 6 ## len = 9', () => {
    const input = "CABBBBACC";

    const output = reducePairs(input);

    let expectedOutput = "C";

    expect(output).toEqual(expectedOutput);
});

test('reducePairs test case 7', () => {
    const input = "CCAAB";

    const output = reducePairs(input);

    let expectedOutput = "B";

    expect(output).toEqual(expectedOutput);
});

test('reducePairs test case 8', () => {
    const input = "ABCABCABCABC";

    const output = reducePairs(input);

    let expectedOutput = "ABCABCABCABC";

    expect(output).toEqual(expectedOutput);
});