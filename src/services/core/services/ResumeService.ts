import {IResumeService} from '../interfaces/ResumeServiceInterface.ts';
import {BaseService} from './BaseService.ts';
import {ResumeModel} from '../models/ResumeModel.ts';

export class ResumeService extends BaseService implements IResumeService {
  async getResume(month: number): Promise<ResumeModel> {
    const {data} = await this.request().get(`/resume?month=${month}`);
    return data;
  }
}
