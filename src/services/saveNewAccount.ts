import { Request, Response } from 'express';
import { SaveAccount } from '../interfaces';
import { saveLoginPass } from '../fileSystem';

const saveNewAccount = async (req: Request, res: Response): Promise<void> => {
  const { login } = req.body;
  const { password } = req.body;
  const newAccount: SaveAccount = {
    login,
    password
  }
  const isSaved = await saveLoginPass(newAccount);
  if (isSaved) {
    res.sendStatus(201);
  } else {
    res.sendStatus(400);
  }
};

export default saveNewAccount;