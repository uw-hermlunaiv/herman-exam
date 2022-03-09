export interface ITokenRequest {
  client_id: string;
  client_secret: string;
  grant_type: string;
}

export interface IToken {
  access_token: string;
  token_type: string;
  expires_in: string;
  '.issued': string;
  '.expires': string;
}
