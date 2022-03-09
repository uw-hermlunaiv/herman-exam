import axios from '.';
import {
  IToken, ITokenRequest,
} from '../interfaces/Token';
import {
  IUser, IUserRequest,
} from '../interfaces/User';

const authAPI = {
  getToken: (body: ITokenRequest): Promise<IToken> => axios.post('/authorization/token', `client_id=${body.client_id}&client_secret=${body.client_secret}&grant_type=${body.grant_type}`),
  login: (body: IUserRequest): Promise<IUser> => axios.post('/application/account/login', body),
};

export default authAPI;
