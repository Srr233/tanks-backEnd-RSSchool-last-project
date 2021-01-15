import express from 'express';
import bodyParser from 'body-parser';
import saveNewAccount from './services/saveNewAccount';

const server = express();
const urlencodedParser = bodyParser.urlencoded({ extended: false });


server.post('/', urlencodedParser, saveNewAccount);

server.listen(3000);