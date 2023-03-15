const fetchMock = require('jest-fetch-mock');
const queryNetwork = require('../src/queryNetwork');

describe('queryNetwork', () => {
  // TODO: Put your tests here

  // Mock fetch.js
  jest.mock('../dependencies/fetch')

  // Test that fetch is invoked
  test('is fetch invoked', () => {
    //fetchMock.mockResponseOnce(JSON.stringify({}));
    //queryNetwork();
    //expect(fetch).toHaveBeenCalledWith(www.google.com);
    //return Promise.resolve(exampleResponse)
  })

  // Test that the returned promise resolves into the object
  // your mock is using for the json() method
  test('did the returned promise resolve into object the mock is using for the json() method', () => {
    
  })
});