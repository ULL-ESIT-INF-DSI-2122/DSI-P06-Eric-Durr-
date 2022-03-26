import { expect } from 'chai';
import { describe, it } from 'mocha';

import { Alphabet } from '../../src/ejercicio-3/alphabet.class';
import { Key } from '../../src/ejercicio-3/key.class';
import { Cypher } from '../../src/ejercicio-3/cypher.class';

describe('Caesar cypher engine for abecedary alphabet and \'CLAVE\' key:', () => {
  const abecedary: Alphabet = new Alphabet('abCdefghijklmnopqrstuvwxyz');

  const myKey: Key = new Key(abecedary, 'CLAVE');

  describe('Testing HOLAESTOESUNAPRUEBA original text', () => {
    const caesar: Cypher = new Cypher(abecedary, myKey, 'HOLAESTOESUNAPRUEBA');

    it('Original text should be HOLAESTOESUNAPRUEBA', () => {
      expect(caesar.originalText()).to.be.eq('HOLAESTOESUNAPRUEBA');
    });
    it('Mapping the key on position 0 should return C', () => {
      expect(caesar.mapKey(0)).to.be.eq('C');
    });
    it('Mapping the key on position 1 should return L', () => {
      expect(caesar.mapKey(1)).to.be.eq('L');
    });
    it('Mapping the key on position 2 should return A', () => {
      expect(caesar.mapKey(2)).to.be.eq('A');
    });
    it('Mapping the key on position 3 should return V', () => {
      expect(caesar.mapKey(3)).to.be.eq('V');
    });
    it('Mapping the key on position 4 should return E', () => {
      expect(caesar.mapKey(4)).to.be.eq('E');
    });
    it('Mapping the key on position 5 should return C', () => {
      expect(caesar.mapKey(5)).to.be.eq('C');
    });
    it('Mapping the key on position 6 should return L', () => {
      expect(caesar.mapKey(6)).to.be.eq('L');
    });
    it('Cypher text should be HOLAESTOESUNAPRUEBA', () => {
      expect(caesar.cypherText()).to.be.eq('KAMWJVFPAXXZBLWXQCW');
    });
  });

  describe('Testing H0L43ST03SUN4PRU3B4 original text', () => {
    const caesarTwo: Cypher = new Cypher(abecedary, myKey, 'H0L43ST03SUN4PRU3B4');
    it('Shifting character \'A\' with key value \'A\' should return B', () => {
      expect(caesarTwo.shift('A', 'A')).to.be.eq('b');
    });
    it('Shifting character \'0\' should return undefined', () => {
      expect(caesarTwo.shift('0', 'C')).to.be.eq(undefined);
    });
    it('Original text should be H0L43ST03SUN4PRU3B4', () => {
      expect(caesarTwo.originalText()).to.be.eq('H0L43ST03SUN4PRU3B4');
    });
    it('Cypher text should be HOLAEST0ESUNAPRUEBA leaving non included char as in the originañ', () => {
      expect(caesarTwo.cypherText()).to.be.eq('K0M43VF03XXZ4LWX3C4');
    });
  });
});
