import * as fs from 'fs';
import { Fighter } from './fighter.class';
import { FighterPrint } from './fighter.interfaces'; // eslint-disable-line

/**
 * # Combat Class | Primary parent class
 *
 * ## Implements
 *
 * - FighterPrint
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
export class Combat implements FighterPrint {
  private firstFighter: Fighter;
  private secondFighter: Fighter;

  constructor(firstFighter: Fighter, secondFighter: Fighter) {
    this.firstFighter = firstFighter;
    this.secondFighter = secondFighter;
  }

  print(): void {
    console.log('\t\n\nCombat status:\n');
    // image
    console.log('\t__________________________________________________________________________________________\n');

    // Second fighter
    console.log(`\tFirst fighter | ${this.firstFighter.getName().toUpperCase()}`);
      
    console.log(`\nHP: ${this.firstFighter.getStat('hp')} \t\t| ` +
                `${'█'.repeat(this.firstFighter.getStat('hp'))}` +
                `${'_'.repeat(100 - this.firstFighter.getStat('hp'))}`);
    console.log(`ATTACK: ${this.firstFighter.getStat('atk')} \t| ` +
                `${'█'.repeat(this.firstFighter.getStat('atk'))}` +
                `${'_'.repeat(100 - this.firstFighter.getStat('atk'))}`);
    console.log(`DEFENSE: ${this.firstFighter.getStat('def')} \t| ` +
                `${'█'.repeat(this.firstFighter.getStat('def'))}` +
                `${'_'.repeat(100 - this.firstFighter.getStat('def'))}`);
    console.log(`SPEED: ${this.firstFighter.getStat('spd')} \t| ` +
                `${'█'.repeat(this.firstFighter.getStat('spd'))}` +
                `${'_'.repeat(100 - this.firstFighter.getStat('spd'))}\n\n`);
                
    console.log('\t\t\n----------------------------------------------\n');

    // Second fighter
    console.log(`\tSecond fighter | ${this.secondFighter.getName().toUpperCase()}`);
    console.log(`\nHP: ${this.secondFighter.getStat('hp')} \t\t| ` +
                `${'█'.repeat(this.secondFighter.getStat('hp'))}` +
                `${'_'.repeat(100 - this.secondFighter.getStat('hp'))}`);
    console.log(`ATTACK: ${this.secondFighter.getStat('atk')} \t| ` +
                `${'█'.repeat(this.secondFighter.getStat('atk'))}` +
                `${'_'.repeat(100 - this.secondFighter.getStat('atk'))}`);
    console.log(`DEFENSE: ${this.secondFighter.getStat('def')} \t| ` +
                `${'█'.repeat(this.secondFighter.getStat('def'))}` +
                `${'_'.repeat(100 - this.secondFighter.getStat('def'))}`);
    console.log(`SPEED: ${this.secondFighter.getStat('spd')} \t| ` +
                `${'█'.repeat(this.secondFighter.getStat('spd'))}` +
                `${'_'.repeat(100 - this.secondFighter.getStat('spd'))}\n\n`);
    console.log('\t__________________________________________________________________________________________\n');
  }

  start(): Fighter {
    let i: number = 1;
    while (this.firstFighter.getStat('hp') > 0
       && this.secondFighter.getStat('hp') > 0) {
      console.log(`COMBAT ROUND: ${i}`);
      console.log(`${this.firstFighter.getName()} attaks ${this.secondFighter.getName()}`);
      if (this.firstFighter.getStat('hp') > 0
      && this.secondFighter.getStat('hp') > 0) {
        this.firstFighter.speak();
        this.secondFighter
          .setStat(
            this.secondFighter.getStat('hp') - this.firstFighter.attack(this.secondFighter)
          )('hp');
      }
      this.print();
      console.log(`${this.secondFighter.getName()} attaks ${this.firstFighter.getName()}`);
      if (this.firstFighter.getStat('hp') > 0
      && this.secondFighter.getStat('hp') > 0) {
        this.secondFighter.speak();
        this.firstFighter
          .setStat(
            this.firstFighter.getStat('hp') - this.secondFighter.attack(this.firstFighter)
          )('hp');
      }
      this.print();
      i += 1;
    }
    return this.firstFighter.getStat('hp') <= 0
      ? this.secondFighter
      : this.firstFighter;
  }
}
