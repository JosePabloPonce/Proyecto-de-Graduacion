export interface IConteos {
  gender: string;
  email: string;
  name: {
    title: string;
    first: string;
    last: string;
  };
  login: {
    uuid:string
  }
}