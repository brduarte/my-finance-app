import {IAuthService} from '../interfaces/OauthServiceInterface.ts';
import AuthModel from '../models/AuthModel.ts';
import {TokenModel} from '../models/TokenModel.ts';
import {BaseService} from './BaseService.ts';

export class OAuthService extends BaseService implements IAuthService {
  async token(oauth: AuthModel): Promise<TokenModel> {
    const {data} = await this.request().post('/oauth/token', {
      grant_type: 'password',
      ...oauth,
    });

    return data;
  }
}
