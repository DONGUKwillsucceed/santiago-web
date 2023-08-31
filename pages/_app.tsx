import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeadMeta from "../components/head-meta";
import { CssBaseline } from "@mui/material";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <HeadMeta
        title={undefined}
        description={undefined}
        url={undefined}
        image={undefined}
      />
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}
