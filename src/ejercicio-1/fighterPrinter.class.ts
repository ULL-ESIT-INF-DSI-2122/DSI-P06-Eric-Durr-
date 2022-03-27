import { Fighter } from './fighter.class';
import { FighterPrint } from './fighter.interfaces';

export abstract class FighterPrinter implements FighterPrint {
  protected readonly fighter: Fighter;

  constructor(fighter: Fighter) {
    this.fighter = fighter;
  }

  public abstract print(): void;
}
