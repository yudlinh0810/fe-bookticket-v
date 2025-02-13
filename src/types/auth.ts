export interface User {
  readonly email: string;
  surName: string;
  name: string;
  phone?: string;
  birthDate?: Date;
  address?: string;
}

export interface PayLoad<T> {
  type: string;
  payload: T;
  error: Error;
}

export interface LoginPayLoad {
  username: string;
  password: string;
}

export interface RegisterPayLoad {
  username: string;
  surname: string;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
