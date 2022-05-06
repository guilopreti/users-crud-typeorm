export interface IUserCreate {
  name: string;
  email: string;
  password: string;
  age: number;
}

export interface IUpdateUser {
  id: string;
  name?: string;
  email?: string;
  password?: string;
  age?: number;
}
