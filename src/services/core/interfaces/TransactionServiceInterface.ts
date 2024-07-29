import {TransactionsModel} from '../models/TransactionsModel.ts';

export interface ITransactionService {
  getAll(): Promise<TransactionsModel[]>;
}
