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

type PokemonType = 'fire' | 'leaf' | 'water' | 'electric' | 'normal';

// according to: https://marvel.fandom.com/wiki/Initiative_Classification
type MarvelType =
  'classOne' |
  'classTwo' |
  'threats' |
  'categoryD' |
  'classTen' |
  'bellow50' |
  'class50' |
  'class100' |
  'levelNine' |
  'omega';

export {
  PokemonType,
  MarvelType,
  Measures,
  Stats,
};
