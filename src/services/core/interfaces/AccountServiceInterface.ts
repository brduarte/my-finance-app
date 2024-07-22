import {AccountModel} from '../models/AccountModel.ts';

export interface IAccountService {
  create(account: AccountModel): Promise<AccountModel>;
}
