import { ISpace } from "./ISpaces";

export interface IUser {
  userEmail: string;
  userName: string;
  spaces: ISpace[];
}
