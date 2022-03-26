import * as fs from 'fs';

import { FighterPrint } from './fighter.interfaces';
import { Pokemon } from './pokemon.class';

export class PokemonPrinter implements FighterPrint {
  private readonly pokemon: Pokemon;

  constructor(pokemon: Pokemon) {
    this.pokemon = pokemon;
  }

  public print(): void {
    console.log(`Name: ${this.pokemon.getName().toUpperCase()}\n`);
    try {
      const result = fs.readFileSync(`./images/${this.pokemon.getName()}.txt`, 'utf8');
      console.log(result);
    } catch {
      const result = fs.readFileSync('./images/unknown.txt', 'utf8');
      console.log(result);
    }
    console.log(`\n${this.pokemon.getShape('weight')} Kg - ${this.pokemon.getShape('height')} cm`);
    console.log(`\nHP: ${this.pokemon.getStat('hp')} \t\t| `
              + `${'█'.repeat(this.pokemon.getStat('hp'))}`
              + `${'_'.repeat(100 - this.pokemon.getStat('hp'))}`);
    console.log(`ATTACK: ${this.pokemon.getStat('atk')} \t| `
              + `${'█'.repeat(this.pokemon.getStat('atk'))}`
              + `${'_'.repeat(100 - this.pokemon.getStat('atk'))}`);
    console.log(`DEFENSE: ${this.pokemon.getStat('def')} \t| `
              + `${'█'.repeat(this.pokemon.getStat('def'))}`
              + `${'_'.repeat(100 - this.pokemon.getStat('def'))}`);
    console.log(`SPEED: ${this.pokemon.getStat('spd')} \t| `
              + `${'█'.repeat(this.pokemon.getStat('spd'))}`
              + `${'_'.repeat(100 - this.pokemon.getStat('spd'))}\n\n`);
  }
}
