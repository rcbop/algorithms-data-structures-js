const { reverse, reverseVowels } = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});

test('ReverseVowels function exists', () => {
  expect(reverseVowels).toBeDefined();
});

test('ReverseVowels reverses only vowels', () => {
  expect(reverseVowels('  apple')).toEqual('  eppla');
});

test('ReverseVowels reverses only vowels', () => {
  expect(reverseVowels('abacate')).toEqual('ebacata');
});