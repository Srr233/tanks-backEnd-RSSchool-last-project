import { SaveAccount } from '../interfaces';
const checkLogin = (accounts: Array<SaveAccount>, newAccount: SaveAccount): boolean => {
  const copyAccs = accounts.slice();
  const copyNewAcc = newAccount;
  return copyAccs.some((item) => item.login === copyNewAcc.login 
    || item.password === copyNewAcc.password);
};

export default checkLogin;