import { Fighter } from "./fighter.class";
import { FighterActions } from "./fighter.interfaces"; // eslint-disable-line
import { MarvelType, Measures, PokemonType, Stats } from "./fighter.types";

/**
 * # Marvel Class | Primary child class | Extends Fighter
 *
 * ## Features
 *
 * - name | String with pokemon name
 * - type | PokemonType (contains pokemon type)
 * - shape | Object of numbers (defines the pokemon height and weight in that order)
 * - stats | Object of numbers
 * (defines the pokemon health points (hp), attack (atk), defense
 *  (def)  and speed (spd) in that order)
 *
 * ## Fighter Methods
 *
 * - getName(void) | Returns String with pokemon name
 * - getShape(void) | Returns Object of number with pokemon shape
 * - getType(void) | Returns String with pokemon type
 * - getStats(void) | Returns Object of number with pokemon stats
 * - setHp(number) | Sets pokemon HP to value in parameter
 */
export class Marvel
  extends Fighter
  implements FighterActions {

  constructor(
    name: string = '',
    type: MarvelType = 'classOne',
    shape: Measures = { height: 0, weight: 0 },
    stats: Stats = {
      hp: 0,
      atk: 0,
      def: 0,
      spd: 0,
    },
  ) {
    super(name, type, shape, stats);
  }

  public attack(fighter: Fighter): number {
    return (this.getStat('atk') / (fighter.getStat('def') === 0 ? 1 : fighter.getStat('def')))
      * (this.effectiveness(fighter));
  };

  public effectiveness(other: Fighter): 1 | 0.5 | 2 {
    if (this.getType() === other.getType()) { return 1; }

    switch (this.getType()) {
      case 'classOne':
        if (['classTwo', 'threats', 'categoryD'].includes(other.getType())) { return 1; }
        else { return 0.5; }
      case 'classTwo':
        if (other.getType() === 'classOne') { return 2; }
        if (['threats', 'categoryD', 'classTen'].includes(other.getType())) { return 1; }
        else { return 0.5; }
      case 'threats':
        if (['classOne', 'classTwo'].includes(other.getType())) { return 2; }
        if (['categoryD', 'classTen', 'bellow50'].includes(other.getType())) { return 1; }
        else { return 0.5; }
      case 'categoryD':
        if (['classOne', 'classTwo', 'threats'].includes(other.getType())) { return 2; }
        if (['classTen', 'bellow50', 'class50'].includes(other.getType())) { return 1; }
        else { return 0.5; }
      case 'classTen':
        if (['classOne', 'classTwo', 'threats', 'categoryD'].includes(other.getType())) { return 2; }
        if (['bellow50', 'class50', 'class100'].includes(other.getType())) { return 1; }
        else { return 0.5; }
      case 'bellow50':
        if (other.getType() === 'omega') { return 0.5; }
        if (['class50', 'class100', 'levelNine'].includes(other.getType())) { return 1; }
        else { return 1; }
      case 'class50':
        if (['class100', 'levelNine', 'omega'].includes(other.getType())) { return 1; }
        else { return 2; }
      case 'class100':
        if (['levelNine', 'omega'].includes(other.getType())) { return 1; }
        else { return 2; }
      case 'levelNine':
        if (other.getType() === 'levelNine') { return 1; }
        else { return 2; }
      default:
        return 1;
    }
  }
}
