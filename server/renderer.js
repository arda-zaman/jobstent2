import { renderToString } from "react-dom/server";
import React from "react";
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import fs from 'fs';
import path from 'path';
import createStore from "../src/createStore";
import Routes from "../routes";

const Renderer = (req, res) => {
  const store = createStore({});
  const state = store.getState();

  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} query={req.query}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  const meta = `
    ${Helmet.title ? Helmet.title.toString() : ""}
    ${Helmet.meta ? Helmet.meta.toString() : ""}
  `;

  const scripts = `
    <script>
      window.STORE_DATA = ${JSON.stringify(state).replace("<script>", "")}
    </script>
  `;

  const html = fs.readFile(path.resolve('./dist/public/index.html'), 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Something went wrong');
    }

    let newData = data.replace('<div id="all-meta"></div>', meta);
    newData = newData.replace('<div id="root"></div>', `<div id="root">${content}</div>`);
    newData = newData.replace('<div id="scripts"></div>', scripts);

    return res.send(newData);
  });
};

module.exports = Renderer;
