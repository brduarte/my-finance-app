import {IAuthService} from '../interfaces/OauthServiceInterface.ts';
import AuthModel from '../models/AuthModel.ts';
import {TokenModel} from '../models/TokenModel.ts';

export class AuthServiceMock implements IAuthService {
  async token(oauth: AuthModel): Promise<TokenModel> {
    console.log('AuthServiceMock.token', oauth);

    return {
      access_token:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0YzEyNGJhOC1jMmRkLTQ0YTMtYTE2OS04MDU1YzI1YTJjYjkiLCJpc3MiOiJteS1maW5hbmNlLWFwaSJ9.N7T0gvh3ICuEi70tEeCww2A9Nl8uNJEwq8Fj5Es06n8',
      token_type: 'Bearer',
      refresh_token:
        'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0YzEyNGJhOC1jMmRkLTQ0YTMtYTE2OS04MDU1YzI1YTJjYjkiLCJpc3MiOiJteS1maW5hbmNlLWFwaSJ9.N7T0gvh3ICuEi70tEeCww2A9Nl8uNJEwq8Fj5Es06n8',
    };
  }
}
