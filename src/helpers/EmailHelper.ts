export class EmailHelper {
  static validate(value: string): boolean {
    const re = /\S+@\S+\.\S+/;
    return re.test(value);
  }
}
