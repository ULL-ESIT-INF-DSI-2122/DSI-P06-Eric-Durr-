import { SeriesItem } from "./seriesItem.class";
import { SeriesSearch } from "./streamable.interface";
import { StreamableCollection } from "./streamableCollection.class";

export class Series extends StreamableCollection<SeriesItem>
  implements SeriesSearch<SeriesItem>
{
  constructor(list: SeriesItem[] = []) {
    super(list);
  }

  public totalDuration(): number {
    return this.list
    .map((el) => el.getDuration() * el.getEpisodes())
    .reduce((a, b) => a + b);
  }

  selectByEpisodes(episodes: number): SeriesItem | SeriesItem[] | undefined {
    const result: SeriesItem[] = this.list.filter((el) => el.getEpisodes() === episodes);  
    return result.length === 0
      ? undefined
      : result.length === 1
      ? result[0]
      : result;
  }

  selectByMaxEpisodes(episodes: number): SeriesItem | SeriesItem[] | undefined {
    const result: SeriesItem[] = this.list.filter((el) => el.getEpisodes() <= episodes);  
    return result.length === 0
      ? undefined
      : result.length === 1
      ? result[0]
      : result;
  }

  selectByMinEpisodes(episodes: number): SeriesItem | SeriesItem[] | undefined {
    const result: SeriesItem[] = this.list.filter((el) => el.getEpisodes() >= episodes);  
    return result.length === 0
      ? undefined
      : result.length === 1
      ? result[0]
      : result;
  }
  selectOnEmision(): SeriesItem | SeriesItem[] | undefined {
    const result: SeriesItem[] = this.list.filter((el) => el.onEmision());  
    return result.length === 0
      ? undefined
      : result.length === 1
      ? result[0]
      : result;
  }
  selectEnded(): SeriesItem | SeriesItem[] | undefined {
    const result: SeriesItem[] = this.list.filter((el) => !el.onEmision());  
    return result.length === 0
      ? undefined
      : result.length === 1
      ? result[0]
      : result;
  }
}
