import AuthModel from '../models/AuthModel.ts';
import {TokenModel} from '../models/TokenModel.ts';

export interface IAuthService {
  token(oauth: AuthModel): Promise<TokenModel>;
}
