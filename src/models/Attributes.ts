export class Attributes<T extends object> {
  constructor(private data: T) {}
  get<K extends keyof T>(key: K): T[K] {
    //K extends keyof T : K can only be one of the types of T : type constraint
    //T[K] look up types of T with key K, and return the appropriate type
    return this.data[key];
  }

  set(update: T): void {
    Object.assign(this.data, update);
  }
}
