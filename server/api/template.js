import express from 'express';

import { http_build_query, generatePDF } from '../helpers';

const Router = express.Router();

Router.post('/create-pdf', async (req, res) => {
  const templateID = req.body.templateID;
  const userID = req.body.userID;
  const pageSize = req.body.pageSize;

  const pdf = await generatePDF(templateID, userID, pageSize);

  if (pdf) {
    res.status(200).contentType('application/pdf').send(`data:application/pdf;base64,${new Buffer.from(pdf).toString('base64')}`);
  } else {
    res.status(400).json({
      message: 'cannot'
    });
  }
  // res.status(200).contentType('application/pdf').send(`data:application/pdf;base64,${new Buffer.from(pdf).toString('base64')}`);
});


module.exports = Router;