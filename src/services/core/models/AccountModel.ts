import {TransactionsModel} from './TransactionsModel.ts';
import {AccountTypeEnum} from '../enums/AccountTypeEnum.ts';
import {AccountStatusEnum} from '../enums/AccountStatusEnum.ts';

export interface AccountModel {
  id?: string;
  name: string;
  dueDate: string;
  amount: number;
  type: AccountTypeEnum;
  installments: number;
  status?: AccountStatusEnum;
  transaction?: TransactionsModel[];
}
