import { makeAutoObservable } from 'mobx';

interface IUser {
  id?: number;
  email?: string;
  name?: string;
}

export default class UserStore {
  private _isAuth = true;
  private _user: IUser = {};

  constructor() {
    makeAutoObservable(this);
  }

  get isAuth() {
    return this._isAuth;
  }

  get user() {
    return this._user;
  }

  setIsAuth(bool: boolean) {
    this._isAuth = bool;
  }

  setUser(user: IUser) {
    this._user = user;
  }
}
