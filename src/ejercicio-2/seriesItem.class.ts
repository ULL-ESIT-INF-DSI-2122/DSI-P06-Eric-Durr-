import { StreamableItem } from "./streamableItem.class";

export class SeriesItem extends StreamableItem {
  protected episodes: number;
  protected end: string;

  constructor(
    name: string,
    release: string,
    duration: number,
    gendres: string[],
    rating: number,
    episodes: number,
    end: string = '',
    ) {
    super(name, release, duration, gendres, rating);
    this.episodes = episodes;
    this.end = end;
  }

  public getEpisodes(): number { return this.episodes; }

  public onEmision(): boolean { return this.end === ''; }
  
  public endDate(): false | string { return this.end === '' ? false : this.end; }

  public toString(): string {
      let result: string = '';
      result += `${ this.name } (${ this.onEmision() ? 'on emision' : 'finished'}) | `;
      result += `TV Series | ${ this.release }-${ this.end } | `;
      result += `${ this.duration }m/episode | ${ this.episodes } episodes\n`;
      this.gendres.forEach((g) => {
        result += `┌${'─'.repeat(g.length)}┐ `;
      });
      result += '\n';
      this.gendres.forEach((g) => {
        result += `│${g}│ `;
      });
      result += '\n';
      this.gendres.forEach((g) => {
        result += `└${'─'.repeat(g.length)}┘ `;
      });
      result += '\n';
      result += `${this.rating}/10\n`;
      
      return result;
  }
}
