import {BaseService} from './BaseService.ts';
import {IProfileService} from '../interfaces/ProfileServiceInterface.ts';
import {UserModel} from '../models/UserModel.ts';

export class ProfileService extends BaseService implements IProfileService {
  async getProfile(): Promise<UserModel> {
    const {data} = await this.request().get('/profile');
    return data;
  }
}
