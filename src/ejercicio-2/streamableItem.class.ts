
export abstract class StreamableItem {
  protected readonly name: string;
  protected readonly  release: string;
  protected duration: number;
  protected gendres: string[];
  protected rating: number;

  constructor(
    name: string,
    release: string,
    duration: number,
    gendres: string[],
    rating: number,
    ) {
      this.name = name;
      this.release = release;
      this.duration = duration;
      this.gendres = gendres;
      this.rating = rating;
  }

  public getName(): string { return this.name; }
  
  public getRelease(): string { return this.release; }

  public getGendres(): string[] { return this.gendres; }

  public getDuration(): number { return this.duration; } 
  
  public getRating(): number { return this.rating; }

  abstract toString(): string;
}
