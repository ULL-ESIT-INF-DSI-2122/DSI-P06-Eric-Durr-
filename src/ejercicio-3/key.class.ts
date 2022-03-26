import { Alphabet } from './alphabet.class';

export class Key {
  private readonly alphabet: Alphabet;

  private readonly elements: string[];

  constructor(alphabet: Alphabet, elements: string) {
    this.alphabet = alphabet;
    const filteredElements = elements.split('').filter((e) => this.alphabet.toArray().includes(e.toUpperCase()));
    this.elements = filteredElements.map((el) => el.toLowerCase());
  }

  toString(): string {
    return this.elements.map((el) => el.toUpperCase()).join('');
  }

  toArray(): string[] {
    return this.elements.map((el) => el.toUpperCase());
  }

  values(): number[] {
    return this.elements.map((e) => this.alphabet.value(e));
  }

  value(element: string): number {
    return this.elements.includes(element.toLowerCase())
      ? this.alphabet.value(element)
      : -1;
  }
}
