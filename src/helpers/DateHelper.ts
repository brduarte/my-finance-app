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
