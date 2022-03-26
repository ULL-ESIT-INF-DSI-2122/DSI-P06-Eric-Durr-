import { StreamableItem } from './streamableItem.class';

export class DocumentaryItem extends StreamableItem {
  constructor(
    name: string,
    release: string,
    duration: number,
    rating: number,
  ) {
    super(name, release, duration, ['documentary'], rating);
  }

  public toString(): string {
    let result: string = '';
    result += `${this.name} | `;
    result += `Documentary | ${this.release} | `;
    result += `${this.duration}m \n`;
    this.gendres.forEach(() => {
      result += `┌${'─'.repeat(11)}┐ `;
    });
    result += '\n';
    this.gendres.forEach(() => {
      result += '│documentary│ ';
    });
    result += '\n';
    this.gendres.forEach(() => {
      result += `└${'─'.repeat(11)}┘ `;
    });
    result += '\n';
    result += `${this.rating}/10\n`;

    return result;
  }
}
