import { MovieItem } from "./movieItem.class";
import { StreamableCollection } from "./streamableCollection.class";

export class Movies extends StreamableCollection<MovieItem>
{
  constructor(list: MovieItem[] = []) {
    super(list);
  }

  public totalDuration(): number {
    return this.list
    .map((el) => el.getDuration())
    .reduce((a, b) => a + b);
  }

}
