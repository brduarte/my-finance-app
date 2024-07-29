import {ITransactionService} from '../interfaces/TransactionServiceInterface.ts';
import {BaseService} from './BaseService.ts';
import {TransactionsModel} from '../models/TransactionsModel.ts';

export class TransactionService
  extends BaseService
  implements ITransactionService
{
  public async getAll(): Promise<TransactionsModel[]> {
    const {data} = await this.request().get('/transactions');
    return data;
  }
}
