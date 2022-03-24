import { Measures, Stats } from "./fighter.types";

export abstract class Fighter {
    protected readonly name: string;

    protected catchingPhrase: string;
  
    protected readonly type: string;

    protected readonly shape: Measures;
  
    protected stats: Stats;
  
    constructor(
      name: string,
      catchingPhrase: string,
      type: string,
      shape: Measures,
      stats: Stats
    ) {
      this.name = name.toLowerCase();
      this.catchingPhrase = catchingPhrase;
      this.type = type;
      this.shape = shape;
      this.stats = stats;
    }
  
    getName(): string { return this.name; }

    getPhrase(): string { return this.catchingPhrase; }
  
    getType(): string { return this.type; }

    getShape(measure: 'height' | 'weight'): number {
      return measure === 'height'
          ? this.shape.height
          : this.shape.weight;
    }
    getStat(statName: 'hp' | 'atk' | 'def' | 'spd'): number {
      return statName === 'hp'
          ? this.stats.hp
          : statName === 'atk'
          ? this.stats.atk
          : statName === 'def'
          ? this.stats.def
          : this.stats.spd;  
    }

    setStat(newValue: number) {
      return (statName: 'hp' | 'atk' | 'def' | 'spd') : void => {
        this.stats[statName] = newValue;
      }
    }
    speak(): void {
      if (this.getPhrase() !== '') {
        console.log(`\t\t\t\t\t\t┌${'─'.repeat(this.getPhrase().length)}┐`);
        console.log(`\t\t\t\t\t\t│${this.getPhrase()}│`);
        console.log(`\t\t\t\t\t\t└${'─'.repeat(this.getPhrase().length)}┘`);
      }
    }
    public attack(fighter: Fighter): number {
      return (this.getStat('atk') / (fighter.getStat('def') === 0 ? 1 : fighter.getStat('def')))
        * (this.effectiveness(fighter));
    };

    abstract effectiveness(fighter: Fighter): 0.5 | 1 | 2;
  }