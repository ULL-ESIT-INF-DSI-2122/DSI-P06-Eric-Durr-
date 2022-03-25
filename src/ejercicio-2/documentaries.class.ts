import { DocumentaryItem } from "./documentaryItem.class";
import { StreamableCollection } from "./streamableCollection.class";

export class Documentaries extends StreamableCollection<DocumentaryItem>
{
  constructor(list: DocumentaryItem[] = []) {
    super(list);
  }

  public totalDuration(): number {
    return this.list
    .map((el) => el.getDuration())
    .reduce((a, b) => a + b);
  }

}
