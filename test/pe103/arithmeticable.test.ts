import { describe, it } from 'mocha';
import { expect } from 'chai';
import { Complex } from '../../src/pe103/complex.class'; // eslint-disable-line

describe('Arithmeticable operations between two complex numbers', () => {
  const oneIThree = new Complex(1, 3);
  const twoIOne = new Complex(2, 1);

  it('Complex are built as expected', () => {
    expect(oneIThree.getImaginary()).to.be.eq(3);
    expect(oneIThree.getReal()).to.be.eq(1);
  });
  it('Complex numbers add should return complex number result', () => {
    expect(oneIThree.add(twoIOne)).to.be.eql(new Complex(3, 4));
  });
  it('Complex numbers substract should return complex number result', () => {
    expect(oneIThree.sub(twoIOne)).to.be.eql(new Complex(-1, 2));
  });
  it('Complex numbers mult should return complex number result', () => {
    expect(oneIThree.mul(twoIOne)).to.be.eql(new Complex(-1, 7));
  });
  it('Complex numbers divide should return complex number result', () => {
    expect(oneIThree.div(twoIOne)).to.be.eql(new Complex(1, 1));
  });
});
