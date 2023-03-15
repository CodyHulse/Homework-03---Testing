const forEach = require('../src/forEach');

describe('forEach', () => {
  // TODO: Put your tests here

  // Test that your callback is invoked for each array entry
  test('callback should be invoked for each array entry', () => {
    const testArray = ['cat', 'dog', 'wolf', 'tiger'];
    const callback = jest.fn();
    
    forEach(testArray, callback);
    expect(callback).toHaveBeenCalledTimes(4);
  });

  // Test that your callback arguments are provided accurately
  test('callback arguments should be provided accurately', () => {
    const testArray = ['cat', 'dog', 'wolf', 'tiger'];
    const callback = jest.fn();

    forEach(testArray, callback);
    expect(callback).toHaveBeenNthCalledWith(1, 'cat', 0, testArray);
    expect(callback).toHaveBeenNthCalledWith(2, 'dog', 1, testArray);
    expect(callback).toHaveBeenNthCalledWith(3, 'wolf', 2, testArray);
    expect(callback).toHaveBeenNthCalledWith(4, 'tiger', 3, testArray);
  });
});