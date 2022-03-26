export class Alphabet {
  private readonly elements: string[];

  constructor(elements: string) {
    this.elements = elements.split('').map((el) => el.toLowerCase()).sort();
  }

  toString(): string {
    return this.elements.map((el) => el.toUpperCase()).join('');
  }

  toArray(): string[] {
    return this.elements.map((el) => el.toUpperCase());
  }

  value(element: string): number {
    return this.elements.includes(element.toLowerCase())
      ? this.elements.indexOf(element.toLowerCase()) + 1
      : -1;
  }

  element(inx: number): string | undefined {
    return this.elements[inx];
  }
}
