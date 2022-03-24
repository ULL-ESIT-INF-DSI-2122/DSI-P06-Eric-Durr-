import * as Arithmeticable from './arithmeticable.interface';  // eslint-disable-line

type ComplexNum = {
  real: number,
  img: number,
};

export class Complex implements
  Arithmeticable.ArithmeticableAdd<any>,
  Arithmeticable.ArithmeticableSubtract<any>,
  Arithmeticable.ArithmeticableMultiply<any>,
  Arithmeticable.ArithmeticableDivide<any> {
  private num: ComplexNum;

  constructor(real: number, img: number) {
    this.num = { real, img };
  }

  getReal(): number {
    return this.num.real;
  }

  getImaginary(): number {
    return this.num.img;
  }

  add(other: Complex): Complex {
    return new Complex((this.num.real + other.getReal()), (this.num.img + other.getImaginary()));
  }

  sub(other: Complex): Complex {
    return new Complex(this.num.real - other.getReal(), this.num.img - other.getImaginary());
  }

  mul(other: Complex): Complex {
    return new Complex(
      this.num.real * other.getReal() - this.num.img * other.getImaginary(),
      this.num.real * other.getImaginary() + this.num.img * other.getReal(),
    );
  }

  div(other: Complex): Complex {
    return new Complex(
      (this.num.real * other.getReal() + this.num.img * other.getImaginary())
      / (other.getReal() ** 2 + other.getImaginary() ** 2),
      (this.num.img * other.getReal() - this.num.real * other.getImaginary())
      / (other.getReal() ** 2 + other.getImaginary() ** 2),
    );
  }
}
