import { Pokemon } from './pokemon.class'; // eslint-disable-line
/**
 * # Custom type PokemonType
 * type value of literal strings 'fire', 'leaf', 'water', 'electric' and 'normal'
 */
type PokemonType = 'fire' | 'leaf' | 'water' | 'electric' | 'normal';

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
interface PokemonPrint {
  print(): void;
}

/**
 * # Pokemon Actions | interface
 * defines the actions that a pokemon would make
 */
interface PokemonActions {
  speak?(): void;
  attack(attacker: Pokemon): void;
  effectiveness(attacker: Pokemon, receiver: Pokemon): 1 | 0.5 | 2 ;
}

export {
  PokemonType,
  Measures,
  Stats,
  PokemonPrint,
  PokemonActions,
};
