import { SeriesItem } from './seriesItem.class';

/* eslint-disable */
interface StreamableProperties<T> {
  totalDuration(): number;
  averageRating(): number;
  numberOfItems(): number;
}

interface StreamableActions<T> {
  addItem(item: T): boolean;
  removeItem(item: T): boolean;
}

interface StreamablePrint<T> {
  print(): void;
}

interface StreamableSearch<T> {
  selectByName(name: string): T | undefined;
  selectBySimilarWord?(name: string): T[] | undefined;
  selectByDuration(duration: number): T[] | T | undefined;
  selectByRelease(release: string): T[] | T | undefined;
  selectByMinDuration?(duration: number): T[] | T | undefined;
  selectByMaxDuration?(duration: number): T[] | T | undefined;
  selectByGendre(gendre: string): T[] | T | undefined;
  selectByRating(rating: number): T[] | T | undefined;
}

interface SeriesSearch<T extends SeriesItem> {
  selectByEpisodes(episodes: number): T[] | T | undefined;
  selectByMaxEpisodes(episodes: number): T[] | T | undefined;
  selectByMinEpisodes(episodes: number): T[] | T | undefined;
  selectOnEmision(): T[] | T | undefined;
  selectEnded(): T[] | T | undefined;
}

export {
  StreamableProperties,
  StreamableActions,
  StreamableSearch,
  StreamablePrint,
  SeriesSearch,
};

/* eslint-enable */
