import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import initWebRoute from './routes/web';
import initApiRoute from './routes/api';

import configViewEngine from './config/configViewEngine';
import configCors from './config/cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

//config CORS
configCors(app);

//config view engine
configViewEngine(app);

//config body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//config cookie parser
app.use(cookieParser());

// init Routes
initApiRoute(app);
initWebRoute(app);

app.use((req,res) => {
  return res.send("404 page not found !");
});

app.listen(port, () => {
  console.log(`Bookstore backend app listening on port ${port}`);
})