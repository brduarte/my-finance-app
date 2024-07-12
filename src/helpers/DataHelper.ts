import dayjs from 'dayjs';

export class DataHelper {
  static brToIso(value: string) {
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(value)) {
      throw new Error('Invalid Format. Use dd/mm/yyyy.');
    }

    const [dia, mes, ano] = value.split('/');

    const data = dayjs(`${ano}-${mes}-${dia}`);

    return data.format('YYYY-MM-DD');
  }
}
