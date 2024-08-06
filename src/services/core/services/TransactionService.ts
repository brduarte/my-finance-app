import {ITransactionService} from '../interfaces/TransactionServiceInterface.ts';
import {BaseService} from './BaseService.ts';
import {TransactionsModel} from '../models/TransactionsModel.ts';

export class TransactionService
  extends BaseService
  implements ITransactionService
{
  public async getAll(
    limit?: number,
    month?: number,
  ): Promise<TransactionsModel[]> {
    const {data} = await this.request().get(
      `/transactions/?limit=${limit}&month=${month}`,
    );
    return data;
  }

  public async delete(id: string) {
    await this.request().delete(`/transactions/${id}`);
  }
}
