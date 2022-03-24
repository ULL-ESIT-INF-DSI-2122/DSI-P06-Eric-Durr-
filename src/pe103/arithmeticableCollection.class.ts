export class ArithmeticableCollection<T
  extends { add(other: T): T, sub(other: T): T, mul(other: T): T, div(other: T): T }> { // eslint-disable-line
  private list: T[];

  constructor() {
    this.list = [];
  }

  addArithmeticable(newElement: T) {
    this.list.push(newElement);
  }

  getArithmeticable(index: number): T {
    return this.list[index];
  }

  getNumberOfArithmeticables() { return this.list.length; }
}
