import { expect } from 'chai';
import { describe, it } from 'mocha';

import { Alphabet } from '../../src/ejercicio-3/alphabet.class';
import { Key } from '../../src/ejercicio-3/key.class';

describe('Alphabets for cyphering engines:', () => {
  const abecedary: Alphabet = new Alphabet('abCdefghijklmnopqrstuvwxyz');

  const myKey: Key = new Key(abecedary, 'key');
  it('Key elements can be accessed as single string', () => {
    expect(myKey.toString()).to.be.eq('KEY');
  });
  it('Key elements can be accessed as array of string', () => {
    expect(myKey.toArray()).to.be.eql([
      'K',
      'E',
      'Y',
    ]);
  });
  it('Key array of displacements can be accessed', () => {
    expect(myKey.values()).to.be.eql([11, 5, 25]);
  });

  it('Key single displacement can be accessed', () => {
    expect(myKey.value('K')).to.be.eql(11);
    expect(myKey.value('E')).to.be.eql(5);
    expect(myKey.value('Y')).to.be.eql(25);
    expect(myKey.value('J')).to.be.eql(-1);
  });
});
