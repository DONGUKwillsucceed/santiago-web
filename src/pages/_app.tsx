import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import HeadMeta from "../components/head-meta";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadMeta
        title={undefined}
        description={undefined}
        url={undefined}
        image={undefined}
      />
      <Component {...pageProps} />
    </>
  );
}
