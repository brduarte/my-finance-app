import {TransactionsModel} from './TransactionsModel.ts';
import {AccountTypeEnum} from '../enums/AccountTypeEnum.ts';
import {AccountStatusEnum} from '../enums/AccountStatusEnum.ts';

export interface AccountModel {
  id?: string;
  name: string;
  dueDate: string;
  amount: number;
  recurrence: number;
  type: AccountTypeEnum;
  status?: AccountStatusEnum;
  transaction?: TransactionsModel[];
}
