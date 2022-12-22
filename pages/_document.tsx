import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-light dark:bg-dark transition duration-300 ease-in-out">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
