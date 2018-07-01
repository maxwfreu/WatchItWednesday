import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Watch it Wednesday</title>
          <meta name="description" content="Find out what movies to watch this Wednesday. The best mediocre movies hand picked by a mediocre guy." />
          <meta name="keywords" content="movies, movie suggestions, movie sugestions, movies to watch, best movies, moveis, good movies, recommended movies" />
          <link rel="apple-touch-icon" sizes="76x76" href="../static/images/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="../static/images/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="../static/images/favicon/favicon-16x16.png" />
          <link rel="manifest" href="../static/images/favicon/site.webmanifest" />
          <link rel="mask-icon" href="../static/images/favicon/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="google-site-verification" content="iF6G-tMnLJsk9rj0yKs365B5UVfg9vCQO40glWNUqsA" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}