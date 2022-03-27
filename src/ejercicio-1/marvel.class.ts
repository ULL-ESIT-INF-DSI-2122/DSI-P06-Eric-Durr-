import { Fighter } from './fighter.class';
import { FighterActions } from './fighter.interfaces';
import { MarvelType, Measures, Stats } from './fighter.types';

export class Marvel
  extends Fighter
  implements FighterActions {
  constructor(
    name: string = '',
    catchingPhrase: string = '',
    type: MarvelType = 'classOne',
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
      case 'classOne':
        if (['classTwo', 'threats', 'categoryD'].includes(other.getType())) { return 1; }
        return 0.5;
      case 'classTwo':
        if (other.getType() === 'classOne') { return 2; }
        if (['threats', 'categoryD', 'classTen'].includes(other.getType())) { return 1; }
        return 0.5;
      case 'threats':
        if (['classOne', 'classTwo'].includes(other.getType())) { return 2; }
        if (['categoryD', 'classTen', 'bellow50'].includes(other.getType())) { return 1; }
        return 0.5;
      case 'categoryD':
        if (['classOne', 'classTwo', 'threats'].includes(other.getType())) { return 2; }
        if (['classTen', 'bellow50', 'class50'].includes(other.getType())) { return 1; }
        return 0.5;
      case 'classTen':
        if (['classOne', 'classTwo', 'threats', 'categoryD'].includes(other.getType())) { return 2; }
        if (['bellow50', 'class50', 'class100'].includes(other.getType())) { return 1; }
        return 0.5;
      case 'bellow50':
        if (other.getType() === 'omega') { return 0.5; }
        if (['class50', 'class100', 'levelNine'].includes(other.getType())) { return 1; }
        return 1;
      case 'class50':
        if (['class100', 'levelNine', 'omega'].includes(other.getType())) { return 1; }
        return 2;
      case 'class100':
        if (['levelNine', 'omega'].includes(other.getType())) { return 1; }
        return 2;
      case 'levelNine':
        if (other.getType() === 'levelNine') { return 1; }
        return 2;
      default:
        return 1;
    }
  }
}
