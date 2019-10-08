export interface UserInputRequest {
  path: string;
  method: string;
  headers: UserInputHeader;
  body: UserInputBody;
  queryParams: string;
}

export interface UserInputResponse {
  headers: UserInputHeader;
  statusCode: number;
  body: UserInputBody;
}

export type UserInput = UserInputRequest | UserInputResponse;

export interface UserInputHeader {
  [key: string]: unknown;
}
export type UserInputBody = unknown;

export type UserContent = UserInputBody | UserInputHeader;