import {BookDown, BookUp, CalendarRange} from 'lucide-react-native';

export const optionsTypeAccount = [
  {
    title: 'Simples',
    data: [
      {
        name: 'Débito',
        value: 'PAYABLE',
        description:
          "O lançamento de 'Débito' divide o valor total pelo número de parcelas e projeta os pagamentos a partir da data do primeiro pagamento.",
        icon: BookDown,
      },
      {
        name: 'Crédito',
        value: 'RECEIVABLE',
        description:
          "O lançamento de 'Crédito' divide o valor total pelo número de parcelas e projeta os pagamentos a partir da data do primeiro vencimento.",
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
          "O lançamento de 'Assinatura' repetirá o valor total de acordo com a recorrência selecionada e projetará os pagamentos a partir da data da assinatura.",
        icon: CalendarRange,
      },
    ],
  },
];
