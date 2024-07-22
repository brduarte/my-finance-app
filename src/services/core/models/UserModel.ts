import {ResumeModel} from './ResumeModel.ts';

export interface UserModel {
  name: string;
  email: string;
  resume: ResumeModel;
}
