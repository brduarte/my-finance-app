import {TransactionsModel} from '../models/TransactionsModel.ts';

export interface ITransactionService {
  getAll(limit?: number): Promise<TransactionsModel[]>;
}
