import { Moment } from 'moment'

export interface Person {
  gender: String;
  location: Object;
  name: Object;
  email: String;
  login: Object;
  dob: String;
  registered: String;
  phone: String;
  cell: String;
  id: Object;
  picture: Object;
  nat: String;
}

export interface DateObject {
  from: Moment;
  to: Moment;
}

export interface Filter {
  name: string;
  phone: string;
  city: string;
  date: DateObject;
}