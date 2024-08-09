import {BookDown, BookUp, CalendarRange} from 'lucide-react-native';
import {TabOptionType} from '../../components/InputTabSelect/InputTabSelect.tsx';
import {RecurrenceEnum} from '../../services/core/enums/RecurrenceEnum.ts';

export const optionsTypeAccount = [
  {
    title: 'Simples',
    data: [
      {
        name: 'Débito',
        value: 'PAYABLE',
        description:
          "Lamçamentos de 'Débito' irão criar uma ou mais transações de débito no seu extrato.",
        icon: BookDown,
      },
      {
        name: 'Crédito',
        value: 'RECEIVABLE',
        description:
          "Lançamentos de 'Crédito' irão criar uma ou mais transações de crédito.",
        icon: BookUp,
      },
    ],
  },
  {
    title: 'Contratos',
    data: [
      {
        name: 'Assinatura',
        value: 'SUBSCRIPTION',
        description:
          'As cobranças da assinatura serão feitas automaticamente conforme a frequência escolhida, até que você cancele a assinatura.',
        icon: CalendarRange,
      },
    ],
  },
];
