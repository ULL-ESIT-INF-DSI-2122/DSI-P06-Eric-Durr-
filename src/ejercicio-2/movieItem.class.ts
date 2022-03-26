import { StreamableItem } from './streamableItem.class';

export class MovieItem extends StreamableItem {
  public toString(): string {
    let result: string = '';
    result += `${this.name} | `;
    result += `Film | ${this.release} | `;
    result += `${this.duration}m \n`;
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
