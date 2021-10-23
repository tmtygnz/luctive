import axios from "axios";
import { IcheckUser, IcreateAccount } from "../interfaces/IApi";

export const createAccount = async (userID: string, userName: string) => {
  console.log(`Creating account with ${userID} ${userName}`);
  let resp = await axios.post<IcreateAccount>(
    `http://localhost:5467/users/createNew?userID=${userID}&userName=${userName}`
  );
};

export const checkAccount = async (userID: string) => {
  console.log(`Checking account with ${userID}`);
  let resp = await axios.get<IcheckUser>(
    `http://localhost:5467/users/checkUser?userID=${userID}`
  );
  console.log(resp.data.doExist);
  return resp.data.doExist;
};
