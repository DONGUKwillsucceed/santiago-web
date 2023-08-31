import HeaderBar from "@/components/header-bar";
import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (
    <HeaderBar
      needBackButton={false}
      loginInfo={{
        id: "abc",
        name: "Andrew",
        imageUrl: null,
      }}
    />
  );
}
