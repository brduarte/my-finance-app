import {BaseService} from './BaseService.ts';
import {IAccountService} from '../interfaces/AccountServiceInterface.ts';
import {AccountModel} from '../models/AccountModel.ts';

export class AccountService extends BaseService implements IAccountService {
  async create(account: AccountModel): Promise<AccountModel> {
    const {data} = await this.request().post('/accounts', {
      ...account,
      due_date: account.dueDate,
    });
    return data;
  }

  async delete(id: string): Promise<void> {
    await this.request().delete(`/accounts/${id}`);
  }
}
