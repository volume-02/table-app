import { Moment } from 'moment'

export interface IPerson {
  gender: string;
  location: ILocation;
  name: IName;
  email: string;
  login: ILogin;
  dob: string;
  registered: string;
  phone: string;
  cell: string;
  id: IId;
  picture: IPicture;
  nat: string;
}

export interface IName {
  title: string;
  first: string;
  last: string;
}

export interface ILocation {
  street: string;
  city: string;
  state: string;
  postcode: number;
}

export interface ILogin {
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface IId {
  name: string;
  value: string;
}

export interface IPicture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface IDateObject {
  from: Moment;
  to: Moment;
}

export interface IFilter {
  name: string;
  phone: string;
  city: string;
  date: IDateObject;
}

export interface IHeader {
  width: number;
  name: string;
}