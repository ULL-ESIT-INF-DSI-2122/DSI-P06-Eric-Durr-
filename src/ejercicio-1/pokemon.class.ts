import { Fighter } from "./fighter.class";
import { FighterActions } from "./fighter.interfaces"; // eslint-disable-line
import { Measures, PokemonType, Stats } from "./fighter.types";

/**
 * # Pokemon Class | Primary child class | Extends Fighter
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
export class Pokemon
  extends Fighter
  implements FighterActions {

  constructor(
    name: string = '',
    type: PokemonType = 'normal',
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
      case 'fire':
        if (other.getType() === 'water') { return 0.5; }
        if (other.getType() === 'leaf') { return 2; }
        if (other.getType() === 'electric') { return 1; }
        break;
      case 'water':
        if (other.getType() === 'leaf') { return 0.5; }
        if (other.getType() === 'fire') { return 2; }
        if (other.getType() === 'electric') { return 0.5; }
        break;
      case 'leaf':
        if (other.getType() === 'fire') { return 0.5; }
        if (other.getType() === 'water') { return 2; }
        if (other.getType() === 'electric') { return 1; }
        break;
      case 'electric':
        if (other.getType() === 'fire') { return 0.5; }
        if (other.getType() === 'water') { return 2; }
        if (other.getType() === 'leaf') { return 1; }
        break;
      default:
        return 1;
    }
    return 1;
  }
}
