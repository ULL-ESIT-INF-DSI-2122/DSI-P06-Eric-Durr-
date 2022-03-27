import { Fighter } from './fighter.class';
import { FighterActions } from './fighter.interfaces';
import { Measures, PokemonType, Stats } from './fighter.types';

export class Pokemon
  extends Fighter
  implements FighterActions {
  constructor(
    name: string = '',
    catchingPhrase: string = '',
    type: PokemonType = 'normal',
    shape: Measures = { height: 0, weight: 0 },
    stats: Stats = {
      hp: 0,
      atk: 0,
      def: 0,
      spd: 0,
    },
  ) {
    super(name, catchingPhrase, type, shape, stats);
  }

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
