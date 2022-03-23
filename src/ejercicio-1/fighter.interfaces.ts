import { Fighter } from './fighter.class';

/**
 * # Custom type Measures
 * Object of numbers { weight, height }
 */
type Measures = {
  weight: number,
  height: number,
};

/**
 * # Custom type Stats
 * Object of numbers { hp, atk, def, spd }
 */
type Stats = {
  hp: number,
  atk: number,
  def: number,
  spd: number,
};

/**
 * # Pokemon Print | interface
 * used to make a class print it's pokemons
 */
interface PrintableFighter {
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
  Measures,
  Stats,
  PrintableFighter,
  FighterActions,
};
