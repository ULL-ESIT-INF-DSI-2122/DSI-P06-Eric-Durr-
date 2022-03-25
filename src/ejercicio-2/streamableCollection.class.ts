import { StreamableProperties, StreamableSearch } from "./streamable.interface";
import { StreamableItem } from "./streamableItem.class";

export abstract class StreamableCollection<T extends StreamableItem> implements StreamableProperties<T>, StreamableSearch<T> {
  
}
