import { Fighter } from './fighter.class';

/**
 * # Pokemon Print | interface
 * used to make a class print it's pokemons
 */
interface FighterPrint {
  print(): void;
}

/**
 * # Fighter Actions | interface
 * defines the actions that any fighter would make
 */
interface FighterActions {
  speak?(): void;
  attack(other: Fighter): number;
  effectiveness(other: Fighter): 1 | 0.5 | 2 ;
}

export {
  FighterPrint,
  FighterActions,
};
