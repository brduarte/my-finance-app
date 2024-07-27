import axios from 'axios';
import {showMessage} from 'react-native-flash-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TokenModel} from '../models/TokenModel.ts';

export abstract class BaseService {
  public request() {
    const client = axios.create({
      baseURL: 'https://2olroskl47.execute-api.us-east-1.amazonaws.com/hml',
    });

    client.interceptors.request.use(
      async function (config) {
        // Do something before request is sent

        const data = await AsyncStorage.getItem('jwt-key');

        if (data) {
          const token: TokenModel = JSON.parse(data) as TokenModel;

          config.headers.Authorization = `Bearer ${token.access_token}`;
        }

        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      },
    );

    client.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data

        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

        switch (error.response.data.message) {
          case 'Active your account. Check your email.':
            showMessage({
              message: 'Verifique Suas Credenciais',
              description: 'Ative sua conta. Verifique seu e-mail.',
              type: 'danger',
            });
            break;
        }

        return Promise.reject(error);
      },
    );

    return client;
  }
}
