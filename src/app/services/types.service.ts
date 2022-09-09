export interface IUsertype {
  firstName: string;
  lastName: string;
  age: string;
}

export interface ISchool {
  schoolName: string;
  schoolAddress: string;
  numberOfStudent: string;
}

export enum Religion {
  Christain = 'christain',
  Muslim = 'Muslim',
  Traditional = 'Traditional',
}

export const Religionconst: {
  [K in Religion]: { id: string; subject: string };
} = {
  christain: {
    id: '1',
    subject: 'I am a christain',
  },
  Muslim: {
    id: '2',
    subject: 'I am Muslim',
  },
  Traditional: {
    id: '1',
    subject: 'I am a traditionalist',
  },
};

export interface Ichristain {
  churchName: string;
  churchLeader: string;
  churchAddress: string;
}

export interface IMuslism {
  mosqueName: string;
  mosqueLeader: string;
  mosqueAddress: string;
}

export interface ITradition {
  shrineName: string;
  shrienLeader: string;
  shrineAddress: string;
}

export type Iuserdetails = {
  person: IUsertype;
  personschool: ISchool;
  test: string;
};

export type Iuserdetailsb = {
  person: IUsertype;
  personschool: ISchool;
  test: string;
  worshiptype: Religion;
};

export type Iuserdetailsc<T> = {
  person: IUsertype;
  personschool: ISchool;
  test: string;
  religion: T;
};

export type IPermittedreligion<T> = T extends Religion.Christain
  ? Ichristain
  : T extends Religion.Muslim
  ? IMuslism
  : T extends Religion.Traditional
  ? ITradition
  : never;

export type Iuserdetailsd<T> = {
  person: IUsertype;
  personschool: ISchool;
  test: string;
  religion: IPermittedreligion<T>;
};
