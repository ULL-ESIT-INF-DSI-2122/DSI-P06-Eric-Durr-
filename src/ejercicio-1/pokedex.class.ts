import { Fighter } from './fighter.class';

export class PokeDex {
  private list: Fighter[];

  constructor(list: Fighter[] = []) {
    this.list = list;
  }

  isEmpty(): boolean {
    return this.list.length === 0;
  }

  addFighter(newFighter: Fighter): boolean {
    if (this.list.includes(newFighter)) { return false; }
    this.list.push(newFighter);
    return true;
  }

  removeFighter(name: string): boolean {
    if (this.list.filter((el) => el.getName() === name.toLowerCase()).length === 0) {
      return false;
    }
    this.list = this.list
      .filter((el) => el.getName() !== name.toLowerCase());
    return true;
  }

  getFighter(name: string): Fighter | undefined {
    return this.list.find((el) => el.getName() === name);
  }

  getList(): Fighter[] { return this.list; }
}
