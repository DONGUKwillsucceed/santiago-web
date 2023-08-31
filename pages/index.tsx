import HeaderBar from "@/components/header-bar";
import MainAdContainer from "@/components/main-ad-container";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <HeaderBar
        needBackButton={false}
        loginInfo={{
          id: "abc",
          name: "Andrew",
          imageUrl: null,
        }}
      />
      <div className="flex justify-center">
        <MainAdContainer imageUrl={"/main_ad_banner.png"}/>
      </div>
    </div>
  );
}
