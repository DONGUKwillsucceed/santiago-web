import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Head } from 'next/document';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/* <meta charset="utf-8" /> */}
        <title>Search It</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <StoreProvider store={globalState}>
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}
