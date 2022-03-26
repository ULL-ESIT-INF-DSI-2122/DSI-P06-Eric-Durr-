import { FighterPrint } from './fighter.interfaces';
import { PokeDex } from './pokedex.class';

export class PokedexPrinter implements FighterPrint {
  private readonly pokedex: PokeDex;

  constructor(pokedex: PokeDex) {
    this.pokedex = pokedex;
  }

  print(): void {
    this.pokedex
      .getList()
      .forEach((character) => {
        console.log(`Name: ${character.getName().toUpperCase()}\n`);
        console.log(`\n${character.getShape('weight')} Kg - ${character.getShape('height')} cm`);
        console.log(`\nHP: ${character.getStat('hp')} \t\t| `
                  + `${'█'.repeat(character.getStat('hp'))}`
                  + `${'_'.repeat(100 - character.getStat('hp'))}`);
        console.log(`ATTACK: ${character.getStat('atk')} \t| `
                  + `${'█'.repeat(character.getStat('atk'))}`
                  + `${'_'.repeat(100 - character.getStat('atk'))}`);
        console.log(`DEFENSE: ${character.getStat('def')} \t| `
                  + `${'█'.repeat(character.getStat('def'))}`
                  + `${'_'.repeat(100 - character.getStat('def'))}`);
        console.log(`SPEED: ${character.getStat('spd')} \t| `
                  + `${'█'.repeat(character.getStat('spd'))}`
                  + `${'_'.repeat(100 - character.getStat('spd'))}\n\n`);
      });
  }
}
