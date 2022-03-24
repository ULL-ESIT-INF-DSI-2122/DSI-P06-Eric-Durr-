import { Measures, Stats } from "./fighter.types";

export abstract class Fighter {
    protected readonly name: string;
  
    protected readonly type: string;

    protected readonly shape: Measures;
  
    protected stats: Stats;
  
    constructor(
      name: string,
      type: string,
      shape: Measures,
      stats: Stats
    ) {
      this.name = name.toLowerCase();
      this.type = type;
      this.shape = shape;
      this.stats = stats;
    }
  
    getName(): string { return this.name; }
  
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
  }