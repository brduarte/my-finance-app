export class MoneyHelper {
  static stringToReal(value: string) {
    const valueSerialize = Number(value.replace(/\D/g, '')) / 100;

    return valueSerialize.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  static intToReal(value: number = 0) {
    return value.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  }

  static stringToInt(value: string) {
    const valueSerialize = Number(value.replace(/\D/g, ''));

    return valueSerialize * 100;
  }

  static intToDecimal(value: number = 0) {
    return value > 0 ? value / 100 : value;
  }

  static realToInt(value: string) {
    return Number(value.replace(/\D/g, '')) * 100;
  }
}
