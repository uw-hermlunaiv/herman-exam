export interface IUserRequest {
  UserName: string;
  Password: string;
}

export interface IUser {
  UserId: number;
  Name: string;
  Email: string;
  IsAdministrator: boolean;
  CurrentClient: {
    ClientId: number;
    Label: string;
    Description: string;
  };
  UserToken: {
    expires_in: string;
    user_token: string;
  };
}
