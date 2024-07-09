export class MoneyHelper {
  static stringToReal(value: string) {
    const valueSerialize = Number(value.replace(/\D/g, '')) / 100;

    return valueSerialize.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  static intToReal(value: number) {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  static realToInt(value: string) {
    return Number(value.replace(/\D/g, '')) * 100;
  }
}
