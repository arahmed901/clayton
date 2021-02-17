import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Helmet } from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const context = {};
    const sheet = new ServerStyleSheet();
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );
    const styleTags = sheet.getStyleTags();
    var helmet = Helmet.renderStatic();
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
          <html ${helmet.htmlAttributes.toString()} lang="en" xml:lang="en">
            <head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"> 
                ${helmet.meta.toString()}
                ${helmet.title.toString()}
                ${helmet.link.toString()}
                ${assets.client.css ? `<link rel="stylesheet" href="${assets.client.css}">` : ''}
                ${process.env.NODE_ENV === 'production' ? `<script src="${assets.client.js}" defer></script>`
                    : `<script src="${assets.client.js}" defer crossorigin></script>`
                }
                ${styleTags}
            </head>
            <body ${helmet.bodyAttributes.toString()}>
                <div id="root">${markup}</div>
            </body>
        </html>`
      );
    }
  });
export default server;