import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Complex } from '../../src/pe103/complex.class'; // eslint-disable-line
import { ArithmeticableCollection } from '../../src/pe103/arithmeticableCollection.class'; // eslint-disable-line

describe('Arithmeticable collections only admits Complex and Rational', () => {
  const oneIThree = new Complex(1, 3);
  const twoIOne = new Complex(2, 1);

  const collection = new ArithmeticableCollection<Complex>();

  it('Elements can be addetd', () => {
    collection.addArithmeticable(oneIThree);
    collection.addArithmeticable(twoIOne);
  });

  it('Elements can be spotted', () => {
    expect(collection.getArithmeticable(0)).to.be.eq(oneIThree);
  });

  it('List length is readable', () => {
    expect(collection.getNumberOfArithmeticables()).to.be.eql(2);
  });
});
