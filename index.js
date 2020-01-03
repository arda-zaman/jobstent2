
// const functions = require('firebase-functions');
// const puppeteer = require('puppeteer');
// const express = require('express');
// const React = require('react');
// const path = require("path");
// const fs = require("fs");
// const { renderToString } = require('react-dom/server');
// const { StaticRouter } = require("react-router-dom");
// // const { Provider } = require('react-redux');



// const app = express();
// const Routes = require(__dirname + '/../routes.js');
// console.log("RenderToString", typeof Routes);

// // const store = require('./src/createStore.js');



// // app.get('**', (req, res) => {
// //   const content = renderToString(
// //     <StaticRouter location={req.path} query={req.query}>
// //       <Routes />
// //     </StaticRouter>
// //   );
// //   res.send(content);
// // });

// exports.ssrapp = functions.https.onRequest(app);

// const PUPPETEER_OPTIONS = {
//   headless: true,
//   args: [
//     '--disable-gpu',
//     '--disable-dev-shm-usage',
//     '--disable-setuid-sandbox',
//     '--timeout=30000',
//     '--no-first-run',
//     '--no-sandbox',
//     '--no-zygote',
//     '--single-process',
//     "--proxy-server='direct://'",
//     '--proxy-bypass-list=*',
//     '--deterministic-fetch',
//   ],
// };

// const openConnection = async () => {
//   const browser = await puppeteer.launch(PUPPETEER_OPTIONS);
//   const page = await browser.newPage();
//   await page.setUserAgent(
//     'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36'
//   );
//   await page.setViewport({ width: 1920, height: 1080 });
//   return { browser, page };
// };

// const closeConnection = async (page, browser) => {
//   page && (await page.close());
//   browser && (await browser.close());
// };

// exports.generatePDF = functions.https.onRequest(async (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   res.set('Access-Control-Allow-Credentials', 'true');

//   let { browser, page } = await openConnection();
//   let pdf = null;

//   try {
//     const templateID = req.body.templateID;
//     const userID = req.body.userID;

//     await page.goto(`http://localhost:3000/templates/${templateID}/${userID}`, { waitUntil: 'networkidle2' });
//     await page.waitForSelector('.g-resume-container');

//     pdf = await page.pdf({ format: 'A4', printBackground: true });
//   } catch (err) {
//     res.status(400).json({ message: 'Couldn\'t generated' });
//   } finally {
//     await closeConnection(page, browser);
//     res.status(200).contentType('application/pdf').send(`data:application/pdf;base64,${new Buffer.from(pdf).toString('base64')}`);
//   }
// });

// exports.helloWorld = functions.https.onRequest((request, response) => {
//   response.send("Hello from Firebase!");
// });
