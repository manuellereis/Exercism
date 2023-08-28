import { hello } from './hello-world';
import { hello2 } from './hello-world';

describe('Hello World', () => {
  test('Say Hi!', () => {
    expect(hello()).toEqual('Hello, World!');
  });
});
describe('Hello World 2', () => {
  test('Say Hi!', () => {
    expect(hello2()).toEqual('Teste');
  });
});
