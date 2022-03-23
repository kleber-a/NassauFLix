import AsyncStorage from '@react-native-community/async-storage';
import React from 'react';
import {getIdAccessToken, getRequestToken, validateToken} from '../service/api';

export const AuthContext = React.createContext();

export default function Auth({children}) {
  async function userLogin(username, password) {
    try {
      const token = await getRequestToken();
      const isSucess = await validateToken({
        username: username,
        password: password,
        request_token: token,
      });
      const sessionId = await getIdAccessToken({request_token: token});
      AsyncStorage.multiSet([
        ['@CodeApi:username', username],
        ['@CodeApi:token', token],
        ['@CodeApi:session', sessionId],
      ]);
      return isSucess;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{userLogin}}>{children}</AuthContext.Provider>
  );
}
