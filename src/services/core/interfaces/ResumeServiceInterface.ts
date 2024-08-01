import {ResumeModel} from '../models/ResumeModel.ts';

export interface IResumeService {
  getResume(month: number): Promise<ResumeModel>;
}
