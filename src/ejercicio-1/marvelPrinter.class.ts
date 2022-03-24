import { FighterPrint } from "./fighter.interfaces";
import { Marvel } from "./marvel.class";

export class MarvelPrinter implements FighterPrint {

  constructor(private readonly character: Marvel) {}

  public print(): void {
    console.log(`Name: ${this.character.getName().toUpperCase()}\n`);
    console.log(`\n${this.character.getShape('weight')} Kg - ${this.character.getShape('height')} cm`);
    console.log(`\nHP: ${this.character.getStat('hp')} \t\t| ` +
                `${'█'.repeat(this.character.getStat('hp'))}` +
                `${'_'.repeat(100 - this.character.getStat('hp'))}`);
    console.log(`ATTACK: ${this.character.getStat('atk')} \t| ` +
                `${'█'.repeat(this.character.getStat('atk'))}` +
                `${'_'.repeat(100 - this.character.getStat('atk'))}`);
    console.log(`DEFENSE: ${this.character.getStat('def')} \t| ` +
                `${'█'.repeat(this.character.getStat('def'))}` +
                `${'_'.repeat(100 - this.character.getStat('def'))}`);
    console.log(`SPEED: ${this.character.getStat('spd')} \t| ` +
                `${'█'.repeat(this.character.getStat('spd'))}` +
                `${'_'.repeat(100 - this.character.getStat('spd'))}\n\n`);
  }
}
