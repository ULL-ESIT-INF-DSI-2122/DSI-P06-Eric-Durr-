/* eslint-disable */
interface CaesarOperations {
  shift(char: string, key: string): string | undefined;
  mapKey(i: number): string
  cypherText(): string;
  originalText(): string;
}
/* eslint-enable */

interface CypherRequest {
  alphabetInput(): string;
  textInput(): string;
  keyInput(): string;
}

export {
  CaesarOperations,
  CypherRequest,
};
