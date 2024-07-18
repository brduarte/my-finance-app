import {format} from 'date-fns';

export class DateHelper {
  static toBr(date: Date) {
    return format(new Date(date), 'dd/MM/yyyy');
  }

  static toUsa(date: Date) {
    return format(date, 'yyyy-MM-dd');
  }
}
