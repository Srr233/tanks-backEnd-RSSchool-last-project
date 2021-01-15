import { Request, Response } from 'express';
import { SaveAccount } from '../interfaces';
import { readFile } from '../fileSystem';
import checkValues from './checkValues';

const check = (accounts: Array<SaveAccount>, newAccount: SaveAccount): SaveAccount | undefined => {
  const copyAccs = accounts.slice();
  const copyNewAcc = newAccount;
  return copyAccs.find(item => item.login === copyNewAcc.login 
    && item.password === copyNewAcc.password);
}
const getCurrentAccount = async (req: Request, res: Response): Promise<void> => {
  const { login } = req.body;
  const { password } = req.body;
  const isReqExist: boolean = checkValues(login, password);

  if (isReqExist) {
    const acc: SaveAccount = {
      login,
      password
    }
    const data: Array<SaveAccount> = await readFile();

    const currentAccount: SaveAccount | undefined= check(data, acc);

    if (currentAccount) {
      res.json(currentAccount);
    } else {
      res.sendStatus(400);
    }
  } else {
    res.sendStatus(400);
  }
}

export default getCurrentAccount;