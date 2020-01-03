import Express from "express";
import path from 'path';

import bodyParser from "body-parser";
import cors from 'cors';

import API from "./api";
import Template from "./api/template";

import Renderer from "./renderer";
import Middlewares from './middlewares';

const app = Express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.use('/assets', Express.static('assets'));
app.use(Express.static('dist/public'));

Middlewares(app);
app.use('/api/template', Template);
app.use('/api', API);
app.get("*", (req, res) => {
  Renderer(req, res);
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
