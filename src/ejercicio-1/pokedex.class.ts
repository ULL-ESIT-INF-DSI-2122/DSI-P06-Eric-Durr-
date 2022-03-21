import * as fs from 'fs';
import { Pokemon } from './pokemon.class'; // eslint-disable-line
import { PokemonPrint } from './pokemon.interfaces'; // eslint-disable-line

/**
 * # Pokedex Class | Primary parent class
 *
 * ## Implements
 *
 * - PokemonPrint
 *
 * ## Features
 *
 * - list | Pokemon object array (defines an array of pokemons)
 *
 * ## Methods
 *
 * - isEmpty(void) | Returns true if list is empty
 * - print(void) | Prints all pokemon in pokedex and their status
 * - addPokemon(Pokemon) | inserts a pokemon in the list if it's not registered
 * - removePokemon(String) | removes a pokemon from the list by it's name if it's registered
 */
export class PokeDex implements PokemonPrint {
  private list: Pokemon[];

  constructor(list: Pokemon[] = []) {
    this.list = list;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  print(): void {
    console.log('\t\n\n\nPrinting pokedex content ...\n\n\n\n');
    console.log(`\tStored ${this.list.length} pokemons in your pokedex \n`);
    this.list.forEach((pokemon, i) => {
      // image
      console.log('\t__________________________________________________________________________________________\n');
      console.log(`\t${i + 1} | ${pokemon.getName().toUpperCase()}`);
      try {
        const result = fs.readFileSync(`./images/${pokemon.getName()}.txt`, 'utf8');
        console.log(result);
      } catch {
        const result = fs.readFileSync('./images/unknown.txt', 'utf8');
        console.log(result);
      }
      // stats
      console.log(`\tHP: ${pokemon.getStats()[0]} \t\t| [${Array(pokemon.getStats()[0]).fill('#').join('')}]`);
      console.log(`\tAttak: ${pokemon.getStats()[1]} \t| [${Array(pokemon.getStats()[1]).fill('#').join('')}]`);
      console.log(`\tDefense: ${pokemon.getStats()[2]} \t| [${Array(pokemon.getStats()[2]).fill('#').join('')}]`);
      console.log(`\tSpeed: ${pokemon.getStats()[3]} \t| [${Array(pokemon.getStats()[3]).fill('#').join('')}]`);
      console.log('\t__________________________________________________________________________________________\n');
    });
  }

  addPokemon(newPokemon: Pokemon): boolean {
    if (this.list.includes(newPokemon)) { return false; }
    this.list.push(newPokemon);
    return true;
  }

  removePokemon(name: string): boolean {
    if (this.list.filter((el) => el.getName() === name.toLowerCase()).length === 0) {
      return false;
    }
    this.list = this.list
      .filter((el) => el.getName() !== name.toLowerCase());
    return true;
  }
}
