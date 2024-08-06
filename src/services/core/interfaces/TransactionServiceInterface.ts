import {TransactionsModel} from '../models/TransactionsModel.ts';

export interface ITransactionService {
  getAll(limit?: number, month?: number): Promise<TransactionsModel[]>;
  delete(id: string): Promise<void>;
}
