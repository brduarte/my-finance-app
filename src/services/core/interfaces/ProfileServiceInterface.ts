import {UserModel} from '../models/UserModel.ts';

export interface IProfileService {
  getProfile(): Promise<UserModel>;
}
