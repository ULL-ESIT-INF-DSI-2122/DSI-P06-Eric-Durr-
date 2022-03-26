import { expect } from 'chai';
import { describe, it } from 'mocha';

import { Alphabet } from '../../src/ejercicio-3/alphabet.class';

describe('Keys for cyphering engines:', () => {
  const abecedary: Alphabet = new Alphabet('abCdefghijklmnopqrstuvwxyz');
  it('Alphabet elements can be accessed as single string', () => {
    expect(abecedary.toString()).to.be.eq('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  });
  it('Alphabet elements can be accessed as array of string', () => {
    expect(abecedary.toArray()).to.be.eql([
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ]);
  });
  it('Given an included character alphabet position value can be accessed', () => {
    expect(abecedary.value('a')).to.be.eq(1);
    expect(abecedary.value('A')).to.be.eq(1);
  });
  it('Given a non included character alphabet position value should return -1', () => {
    expect(abecedary.value('.')).to.be.eq(-1);
  });
});
