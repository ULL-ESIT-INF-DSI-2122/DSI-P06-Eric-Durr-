import { StreamableProperties, StreamableActions, StreamableSearch } from './streamable.interface';
import { StreamableItem } from './streamableItem.class';

export abstract class StreamableCollection<T extends StreamableItem> implements
    StreamableProperties<T>,
    StreamableActions<T>,
    StreamableSearch<T> {
  protected list: T[];

  protected views: number;

  protected likes: number;

  constructor(list: T[] = []) {
    this.list = list;
    this.views = 0;
    this.likes = 0;
  }

  // Properties
  abstract totalDuration(): number;

  averageRating(): number {
    return +(this.list
      .map((el) => el.getRating())
      .reduce((a, b) => a + b) / this.list.length).toPrecision(2);
  }

  numberOfItems(): number {
    return this.list.length;
  }

  // Actions

  addItem(item: T): boolean {
    if (this.list.includes(item)) {
      return false;
    }
    this.list.push(item);
    return true;
  }

  removeItem(item: T): boolean {
    if (!this.list.includes(item)) {
      return false;
    }
    this.list = this.list.filter((el) => el !== item);
    return true;
  }

  // Search
  selectByName(name: string): T | undefined {
    return this.list.find((el) => el.getName() === name);
  }

  selectByDuration(duration: number): T | T[] | undefined {
    const result: T[] = this.list.filter((el) => el.getDuration() === duration);
    return result.length === 0
      ? undefined
      : result.length === 1
        ? result[0]
        : result;
  }

  selectByRelease(release: string): T | T[] | undefined {
    const result: T[] = this.list.filter((el) => el.getRelease() === release);
    return result.length === 0
      ? undefined
      : result.length === 1
        ? result[0]
        : result;
  }

  selectByGendre(gendre: string): T | T[] | undefined {
    const result: T[] = this.list.filter((el) => el.getGendres().includes(gendre));
    return result.length === 0
      ? undefined
      : result.length === 1
        ? result[0]
        : result;
  }

  selectByRating(rating: number): T | T[] | undefined {
    const result: T[] = this.list.filter((el) => el.getRating() === rating);
    return result.length === 0
      ? undefined
      : result.length === 1
        ? result[0]
        : result;
  }
}
