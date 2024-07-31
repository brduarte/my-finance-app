import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

export class DateHelper {
  static toBr(date: Date) {
    return format(date, 'dd/MM/yyyy');
  }

  static toUsa(date: Date) {
    return format(date, 'yyyy-MM-dd');
  }

  static getCurrentMonth() {
    return format(new Date(), 'LLLL', {locale: ptBR});
  }

  static getCurrentMonthNumber() {
    return format(new Date(), 'L', {locale: ptBR});
  }
}
