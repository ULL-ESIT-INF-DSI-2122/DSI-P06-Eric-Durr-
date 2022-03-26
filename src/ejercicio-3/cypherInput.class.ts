import * as rl from 'readline-sync';

import { Alphabet } from './alphabet.class';
import { Cypher } from './cypher.class';
import { CypherRequest } from './cypher.interfaces';
import { Key } from './key.class';

export class CypherInput implements CypherRequest {
  private caesar: Cypher;

  constructor() {
    const alphabet: Alphabet = new Alphabet(this.alphabetInput());
    const key: Key = new Key(alphabet, this.keyInput());
    const text: string = this.textInput();
    this.caesar = new Cypher(alphabet, key, text);
  }

  getCypher() {
    return this.caesar;
  }

  alphabetInput(): string {
    this.caesar;
    const input: string = rl.question('Insert the list of characters that includes your alphabet: ');
    return input;
  }

  keyInput(): string {
    this.caesar;
    const input: string = rl.question('Insert the list of characters that includes your key: ');
    return input;
  }

  textInput(): string {
    this.caesar;
    const input: string = rl.question('Insert the text to cypher: ');
    return input;
  }
}
