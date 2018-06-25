const twoSum = require('./index');

test('twoSum is a function', () => {
  expect(typeof twoSum).toEqual('function');
});

test('twoSum called with [2, 7, 11, 15], 9', () => {
  let result = twoSum([2, 7, 11, 15], 9);

  expect(result).toEqual([0,1]);
});

test('twoSum called with [0, 0, 11, 15], 9', () => {
    let result = twoSum([0, 0, 11, 15], 9);
  
    expect(result).toEqual(null);
});

test('twoSum called with [1, 2, 7, 15, 11], 9', () => {
    let result = twoSum([1, 2, 7, 15, 11], 9);
  
    expect(result).toEqual([1,2]);
});
  