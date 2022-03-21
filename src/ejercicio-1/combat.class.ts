import * as fs from 'fs';
import { Pokemon } from './pokemon.class'; // eslint-disable-line
import { PokemonPrint, PokemonActions } from './pokemon.interfaces'; // eslint-disable-line

/**
 * # Combat Class | Primary parent class
 *
 * ## Implements
 *
 * - PokemonPrint
 * - PokemonActions
 *
 * ## Features
 *
 * - firstFighter | Pokemon object (defines a Pokemon and it's features)
 * - secondFighter | Pokemon object (defines a Pokemon and it's features)
 *
 * ## Methods
 * - print(void) | Prints current combat status
 * - attack(Pokemon) | Used to attack the pokemon in parameter
 * - effectiveness(Pokemon, Pokemon) | measures effectiveness between pokemon types
 * - start(void) | Starts a fight between two pokemons
 */
export class Combat implements PokemonPrint, PokemonActions {
  private firstFighter: Pokemon;

  private secondFighter: Pokemon;

  constructor(firstFighter: Pokemon, secondFighter: Pokemon) {
    this.firstFighter = firstFighter;
    this.secondFighter = secondFighter;
  }

  print(): void {
    console.log('\t\n\nCombat status:\n');
    // image
    console.log('\t__________________________________________________________________________________________\n');

    // Second fighter
    console.log(`\tFirst fighter | ${this.firstFighter.getName().toUpperCase()}`);
    try {
      const result = fs.readFileSync(`./images/${this.firstFighter.getName()}.txt`, 'utf8');
      console.log(result);
    } catch {
      const result = fs.readFileSync('./images/unknown.txt', 'utf8');
      console.log(result);
    }
    console.log(`\tHP: ${this.firstFighter.getStats()[0]} \t\t| [${Array(this.firstFighter.getStats()[0]).fill('#').join('')}]`);

    console.log('\t\t\n----------------------------------------------\n');

    // Second fighter
    console.log(`\tSecond fighter | ${this.secondFighter.getName().toUpperCase()}`);
    try {
      const result = fs.readFileSync(`./images/${this.secondFighter.getName()}.txt`, 'utf8');
      console.log(result);
    } catch {
      const result = fs.readFileSync('./images/unknown.txt', 'utf8');
      console.log(result);
    }
    // stats
    console.log(`\tHP: ${this.secondFighter.getStats()[0]} \t\t| [${Array(this.secondFighter.getStats()[0]).fill('#').join('')}]`);
    console.log('\t__________________________________________________________________________________________\n');
  }

  attack(first: Pokemon): void {
    const receiver: Pokemon = (this.firstFighter === first)
      ? this.firstFighter
      : this.secondFighter;
    const attacker: Pokemon = (this.firstFighter === first)
      ? this.secondFighter
      : this.firstFighter;

    receiver.setHp(receiver.getStats()[0] - 50
      * (attacker.getStats()[1] / receiver.getStats()[2])
      * (this.effectiveness(attacker, receiver)));
  }

  effectiveness(first: Pokemon, second: Pokemon): 1 | 0.5 | 2 {
    if (first.getType() === second.getType()) { return 1; }

    switch (first.getType()) {
      case 'fire':
        if (second.getType() === 'water') { return 0.5; }
        if (second.getType() === 'leaf') { return 2; }
        if (second.getType() === 'electric') { return 1; }
        break;
      case 'water':
        if (second.getType() === 'leaf') { return 0.5; }
        if (second.getType() === 'fire') { return 2; }
        if (second.getType() === 'electric') { return 0.5; }
        break;
      case 'leaf':
        if (second.getType() === 'fire') { return 0.5; }
        if (second.getType() === 'water') { return 2; }
        if (second.getType() === 'electric') { return 1; }
        break;
      case 'electric':
        if (second.getType() === 'fire') { return 0.5; }
        if (second.getType() === 'water') { return 2; }
        if (second.getType() === 'leaf') { return 1; }
        break;
      default:
        return 1;
    }
    return 1;
  }

  start(): Pokemon {
    let i: number = 1;
    while (this.firstFighter.getStats()[0] > 0
       && this.secondFighter.getStats()[0] > 0) {
      console.log(`COMBAT ROUND: ${i}`);
      console.log(`${this.firstFighter.getName()} attaks ${this.secondFighter.getName()}`);
      if (this.firstFighter.getStats()[0] > 0
      && this.secondFighter.getStats()[0] > 0) {
        this.attack(this.secondFighter);
      }
      this.print();
      console.log(`${this.secondFighter.getName()} attaks ${this.firstFighter.getName()}`);
      if (this.firstFighter.getStats()[0] > 0
      && this.secondFighter.getStats()[0] > 0) {
        this.attack(this.firstFighter);
      }
      this.print();
      i += 1;
    }
    return this.firstFighter.getStats()[0] <= 0
      ? this.secondFighter
      : this.firstFighter;
  }
}
