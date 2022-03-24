/**
 * # Arithmeticlable | Interface
 */

interface ArithmeticableAdd <T> {
  add(other: T): T;
}

interface ArithmeticableSubtract <T> {
  sub(other: T): T;
}

interface ArithmeticableMultiply <T> {
  mul(other: T): T;
}

interface ArithmeticableDivide <T> {
  div(other: T): T;
}

interface ArithmeticPrint {
  print(): void;
  toString(): string;
}

export {
  ArithmeticableAdd,
  ArithmeticableSubtract,
  ArithmeticableMultiply,
  ArithmeticableDivide,
  ArithmeticPrint,
};
