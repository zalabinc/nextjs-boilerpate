import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
          <link rel="stylesheet" href="/static/css/sanitize.min.css" />
          <link rel="stylesheet" href="/static/css/tachyons.min.css" />
          <link rel="stylesheet" href="/static/css/tachyons-negative-margins.min.css" />
          <link rel="stylesheet" href="/static/css/style.css" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
