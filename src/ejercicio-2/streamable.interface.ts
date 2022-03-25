interface StreamableProperties<T> {
  list: T[];
  views: number;
  duration: number;
  averageRating: number;
  numberOfItems(): number;
}

interface StreamablePrint<T> {
  print(): void;
}

interface StreamableSearch<T> {
  selectByName(name: string): T;
  selectBySimilarWord?(name: string):  T[];
  selectByDuration(duration: number): T[] | T;
  selectOnEmision(): T[] | T;
  selectEnded(): T[] | T;
  selectByRelease(release: string): T[] | T;
  selectByMinDuration?(duration: number): T[] | T;
  selectByMaxDuration?(duration: number): T[] | T;
  selectByGendre(...gendres: string[]): T[] | T;
  selectByRating(rating: number): T[] | T;
}

export {
  StreamableProperties,
  StreamableSearch,
  StreamablePrint,
};
