import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <title>Watch it Wednesday</title>
          <meta name="description" content="Find out what movies to watch this Wednesday. The best mediocre movies hand picked by a mediocre guy." />
          <meta name="keywords" content="movies, movie suggestions, movie sugestions, movies to watch, best movies, moveis, good movies, recommended movies" />
          
          <link rel="apple-touch-icon" sizes="57x57" href="../static/images/favicon/apple-icon-57x57.png?v=1" />
          <link rel="apple-touch-icon" sizes="60x60" href="../static/images/favicon/apple-icon-60x60.png?v=1" />
          <link rel="apple-touch-icon" sizes="72x72" href="../static/images/favicon/apple-icon-72x72.png?v=1" />
          <link rel="apple-touch-icon" sizes="76x76" href="../static/images/favicon/apple-icon-76x76.png?v=1" />
          <link rel="apple-touch-icon" sizes="114x114" href="../static/images/favicon/apple-icon-114x114.png?v=1" />
          <link rel="apple-touch-icon" sizes="120x120" href="../static/images/favicon/apple-icon-120x120.png?v=1" />
          <link rel="apple-touch-icon" sizes="144x144" href="../static/images/favicon/apple-icon-144x144.png?v=1" />
          <link rel="apple-touch-icon" sizes="152x152" href="../static/images/favicon/apple-icon-152x152.png?v=1" />
          <link rel="apple-touch-icon" sizes="180x180" href="../static/images/favicon/apple-icon-180x180.png?v=1" />
          <link rel="icon" type="image/png" sizes="192x192"  href="../static/images/favicon/android-icon-192x192.png?v=1" />
          <link rel="icon" type="image/png" sizes="32x32" href="../static/images/favicon/favicon-32x32.png?v=1" />
          <link rel="icon" type="image/png" sizes="96x96" href="../static/images/favicon/favicon-96x96.png?v=1" />
          <link rel="icon" type="image/png" sizes="16x16" href="../static/images/favicon/favicon-16x16.png?v=1" />
          <link rel="manifest" href="../static/images/favicon/manifest.json?v=1" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="../static/images/favicon/ms-icon-144x144.png?v=1" />
          <meta name="theme-color" content="#ffffff" />

          <meta name="google-site-verification" content="iF6G-tMnLJsk9rj0yKs365B5UVfg9vCQO40glWNUqsA" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,900" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}