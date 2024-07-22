import {TransactionStatusEnum} from '../enums/TransactionStatusEnum.ts';
import {TransactionTypeEnum} from '../enums/TransactionTypeEnum.ts';

export interface TransactionsModel {
  id?: string;
  name: string;
  amount: number;
  type: TransactionTypeEnum;
  dueDate: string;
  status?: TransactionStatusEnum;
}
