//DOCUMENTATION
/**
 * Repeats a string a specific number of times.
 *
 * @param {string} [text=''] - the string to repeat. defaults to empty string
 * @param {number} [repetitions=1] - how many times to repeat. defaults to 1
 *  Repetitions cannot be negative, and must be an integer.
 *
 * @return {string} The text repeated as many times as repetitions.
 */


//UNIT TEST ASSERTIONS

import { repeatString } from './repeat-string.js';

describe('repeats a string any number of times:', () => {
  describe('an empty string', () => {
    it('should repeat "" 0 times', () => {
      expect(repeatString('', 0)).toEqual('');
    });
    it('should repeat "" 10 times', () => {
      expect(repeatString('', 10)).toEqual('');
    });
    it('should repeat "" 100 times', () => {
      expect(repeatString('', 100)).toEqual('');
    });
  });
  describe('zero repetitions', () => {
    it('a non-empty string repeated 0 times -> ""', () => {
      expect(repeatString('asdf', 0)).toEqual('');
    });
    it('a longer string repeated 0 times -> ""', () => {
      expect(repeatString('tommywalk', 0)).toEqual('');
    });
  });
  describe('standard use cases', () => {
    it('should repeat a phrase 3 times', () => {
      expect(repeatString('go to school', 3)).toEqual(
        'go to schoolgo to schoolgo to school'
      );
    });
    it('should repeat phrases with punctuation', () => {
      expect(repeatString('"Go!", said Dr. Seuss?', 2)).toEqual(
        '"Go!", said Dr. Seuss?"Go!", said Dr. Seuss?'
      );
    });
    it('should repeat strings with special characters', () => {
      expect(repeatString('\\ \n \t s', 2)).toEqual('\\ \n \t s\\ \n \t s');
    });
  });
  describe('default values', () => {
    it('should repeat 1 time by default (second parameter)', () => {
      expect(repeatString('asdf')).toEqual('asdf');
    });
    it('should repeat "" by default (first parameter)', () => {
      expect(repeatString()).toEqual('');
    });
  });
});



//USE CASE - Real World Examples

import { repeatString } from './repeat-string.js';

const userString = document.getElementById('user-text').value;
const userRepetitions = Number(document.getElementById('user-number').value);

const repeatedInput = repeatString(userString, userRepetitions);

document.getElementById('display-repeated').innerText = repeatedInput;
