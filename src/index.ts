import express from 'express';
import bodyParser from 'body-parser';
import saveNewAccount from './services/saveNewAccount';
import getCurrentAccount from './services/getCurrentAccount';

const server = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

server.post('/post', urlencodedParser, saveNewAccount);

server.get('/getAcc', jsonParser, getCurrentAccount);

server.listen(3000);