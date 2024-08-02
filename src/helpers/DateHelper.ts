import {formatInTimeZone} from 'date-fns-tz';
import {ptBR} from 'date-fns/locale';
import {format} from 'date-fns';

export class DateHelper {
  static toBr(date: Date | string) {
    if (date instanceof Date) {
      return formatInTimeZone(date, 'UTC', 'dd/MM/yyyy');
    }

    return formatInTimeZone(date, 'UTC', 'dd/MM/yyyy');
  }

  static toUsa(date: Date) {
    return formatInTimeZone(date, 'UTC', 'dd/MM/yyyy');
  }

  static getNameMonth(month: number) {
    const months = [
      {id: 0, name: 'Janeiro'},
      {id: 1, name: 'Fevereiro'},
      {id: 2, name: 'Março'},
      {id: 3, name: 'Abril'},
      {id: 4, name: 'Maio'},
      {id: 5, name: 'Junho'},
      {id: 6, name: 'Julho'},
      {id: 7, name: 'Agosto'},
      {id: 8, name: 'Setembro'},
      {id: 9, name: 'Outubro'},
      {id: 10, name: 'Novembro'},
      {id: 11, name: 'Dezembro'},
    ];

    return months.find(value => value.id === month)?.name;
  }

  static getCurrentMonthNumber(): number {
    return Number(format(new Date(), 'L', {locale: ptBR}));
  }
}
