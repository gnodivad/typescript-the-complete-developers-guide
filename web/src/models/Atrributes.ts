export class Attributes<T> {
  constructor(private data: T) {}

  get(key: string): string | number {
    return this.data[key];
  }

  set(update: T): void {
    this.data = { ...this.data, ...update };
  }
}
