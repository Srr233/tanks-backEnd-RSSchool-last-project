import fs from 'fs';
import { SaveAccount } from './interfaces';
import checkLogin from './services/checkLogin';

const fsPromises = fs.promises;
const PATH_ACCOUNTS = `${__dirname}/accounts/accounts.json`;

const readFile = async (): Promise<Array<SaveAccount>> => {
  const buffered = await fsPromises
  .readFile(PATH_ACCOUNTS)
  .catch(err =>{ throw err });
  return JSON.parse(buffered.toLocaleString());
}

const checkRepetition = async (data: Array<SaveAccount>, newAccount: SaveAccount): Promise<boolean> => {
  const checked: boolean = checkLogin(data, newAccount);
  return checked;
}

const saveLoginPass = async (newAccount: SaveAccount): Promise<boolean> => {
  const data: Array<SaveAccount> = await readFile();
  const checked = await checkRepetition(data, newAccount);

  if (!checked) {
    save(data, newAccount);
  } 
  return !checked;
}

const save = (data: Array<SaveAccount>, newAccount: SaveAccount): void => {
  data.push(newAccount);
  fsPromises
    .writeFile(PATH_ACCOUNTS, JSON.stringify(data))
    .catch(err => { throw err }); 
}
export { saveLoginPass };