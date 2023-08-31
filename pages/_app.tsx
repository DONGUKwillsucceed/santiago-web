import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeadMeta from "../components/head-meta";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { theme } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider theme={theme}>
      <HeadMeta
        title={undefined}
        description={undefined}
        url={undefined}
        image={undefined}
      />
      <CssBaseline />
      <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
