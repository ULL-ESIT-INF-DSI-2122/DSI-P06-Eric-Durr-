import { Alphabet } from './alphabet.class';
import { CaesarOperations } from './cypher.interfaces';
import { Key } from './key.class';

export class Cypher implements CaesarOperations {
  private readonly alphabet: Alphabet;

  private readonly key: Key;

  private readonly text: string;

  constructor(alphabet: Alphabet, key: Key, text: string) {
    this.alphabet = alphabet;
    this.key = key;
    this.text = text;
  }

  originalText(): string {
    return this.text;
  }

  shift(char: string, key: string): string | undefined {
    return this.alphabet.value(char) === -1
      ? undefined
      : this.alphabet
        .element((this.alphabet.value(char) + this.key.value(key) - 1)
                % this.alphabet.toArray().length);
  }

  mapKey(i: number): string {
    return this.key.toArray()[i % this.key.toString().length];
  }

  cypherText(): string {
    return this.text
      .split('')
      /* eslint-disable */
      .map((el, i) => this.shift(el, this.mapKey(i)) === undefined
        ? el
        : this.shift(el, this.mapKey(i)))
      /* eslint-enable */
      .join('')
      .toUpperCase();
  }
}
