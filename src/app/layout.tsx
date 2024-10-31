'use client';

import './globals.css';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en'>
      <head>
        {/* Meta */}
        <title>Rocket Index</title>
        <meta name="title" content="Rocket Index" />
        <meta name="description" content="An overview of orbital class rockets, both active and in development." />
        <link rel="canonical" href="https://therocketindex.com"/>
        {/* X */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://therocketindex.com" />
        <meta name="twitter:title" content="Rocket Index" />
        <meta name="twitter:description" content="An overview of orbital class rockets, both active and in development." />
        <meta name="twitter:image" content="https://therocketindex.com/images/link-preview.png" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://therocketindex.com" />
        <meta property="og:title" content="Rocket Index" />
        <meta property="og:description" content="An overview of orbital class rockets, both active and in development." />
        <meta property="og:image" content="https://therocketindex.com/images/link-preview.png" />
        {/* favicon */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="Rocket Index" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className='antialiased'>
        { children }
      </body>
    </html>
  );
}
