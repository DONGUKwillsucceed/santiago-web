import "@/styles/globals.css";
import type { AppProps } from "next/app";
import HeadMeta from "../components/head-meta";
import { CssBaseline, ThemeProvider} from "@mui/material";
import { theme } from "@/theme";
import { useEffect } from "react";
import { userSerivce } from "@/api/user/user";
import userStore from "@/store/user-store";
import { regionSelector } from "@/util/region-selector";

export default function App({ Component, pageProps }: AppProps) {
  const {
    setId,
    setImageUrl,
    setName,
    setColumnistCount,
    setRegion,
    setSubscriberCount,
  } = userStore();
  
  useEffect(()=> {
    const fetUserInfo = async () => {
      const userId = localStorage.getItem('userId');
      if(userId) {
        return userSerivce.findUnique(userId).then((data)=>{
          if(data) {
            setId(data.id);
            setName(data.name);
            setImageUrl(data.imageUrl);
            setRegion(regionSelector(data.region, window.navigator.language));
            setSubscriberCount(data.subscriberCount);
            setColumnistCount(data.columnistCount);
          }
        });
      }
    }

    fetUserInfo();
  })
  
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
