import greet from './dummy';

test('dummy test', () => {
  const name = 'World';
  expect(greet(name)).toBe(`Hello ${name}`);
});
