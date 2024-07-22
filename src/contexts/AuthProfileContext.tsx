import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {UserModel} from '../services/core/models/UserModel.ts';
import {IAuthService} from '../services/core/interfaces/OauthServiceInterface.ts';
import {OAuthService} from '../services/core/services/OauthService.ts';
import AuthModel from '../services/core/models/AuthModel.ts';
import {TokenModel} from '../services/core/models/TokenModel.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ProfileService} from '../services/core/services/ProfileService.ts';
import {IProfileService} from '../services/core/interfaces/ProfileServiceInterface.ts';

type IAuthProfileContext = {
  getProfile: () => Promise<UserModel>;
  isLogged: () => boolean;
  signIn: (authModel: AuthModel) => Promise<void>;
};

type AuthProfileContextProps = {
  children?: ReactNode | undefined;
};

const AuthProfileContext = createContext<IAuthProfileContext>(
  {} as IAuthProfileContext,
);

export function AuthProfileProvider({children}: AuthProfileContextProps) {
  const [logged, setIsLogged] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem('jwt-key')
      .then(response => {
        if (response) {
          setIsLogged(true);
        } else {
          setIsLogged(false);
        }
      })
      .catch(() => {
        setIsLogged(false);
      });
  }, []);

  async function signIn(authModel: AuthModel): Promise<void> {
    const authServer: IAuthService = new OAuthService();

    const token: TokenModel = await authServer.token(authModel);

    await AsyncStorage.setItem('jwt-key', JSON.stringify(token));
  }

  async function getProfile(): Promise<UserModel> {
    try {
      const profileService: IProfileService = new ProfileService();
      return profileService.getProfile();
    } catch (error) {
      throw error;
    }
  }

  function isLogged(): boolean {
    return logged;
  }

  return (
    <AuthProfileContext.Provider value={{signIn, getProfile, isLogged}}>
      {children}
    </AuthProfileContext.Provider>
  );
}

export function useAuthProfileContext(): IAuthProfileContext {
  return useContext(AuthProfileContext);
}
