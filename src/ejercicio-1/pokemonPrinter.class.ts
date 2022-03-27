import * as fs from 'fs';

import { FighterPrinter } from './fighterPrinter.class';

export class PokemonPrinter extends FighterPrinter {
  public print(): void {
    console.log(`Name: ${this.fighter.getName().toUpperCase()}\n`);
    try {
      const result = fs.readFileSync(`./images/${this.fighter.getName()}.txt`, 'utf8');
      console.log(result);
    } catch {
      const result = fs.readFileSync('./images/unknown.txt', 'utf8');
      console.log(result);
    }
    console.log(`\n${this.fighter.getShape('weight')} Kg - ${this.fighter.getShape('height')} cm`);
    console.log(`\nHP: ${this.fighter.getStat('hp')} \t\t| `
              + `${'█'.repeat(this.fighter.getStat('hp'))}`
              + `${'_'.repeat(100 - this.fighter.getStat('hp'))}`);
    console.log(`ATTACK: ${this.fighter.getStat('atk')} \t| `
              + `${'█'.repeat(this.fighter.getStat('atk'))}`
              + `${'_'.repeat(100 - this.fighter.getStat('atk'))}`);
    console.log(`DEFENSE: ${this.fighter.getStat('def')} \t| `
              + `${'█'.repeat(this.fighter.getStat('def'))}`
              + `${'_'.repeat(100 - this.fighter.getStat('def'))}`);
    console.log(`SPEED: ${this.fighter.getStat('spd')} \t| `
              + `${'█'.repeat(this.fighter.getStat('spd'))}`
              + `${'_'.repeat(100 - this.fighter.getStat('spd'))}\n\n`);
  }
}
