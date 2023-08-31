import { Roboto } from "next/font/google";

const roboto = Roboto({ weight: "300", subsets: ["latin"] });

export default function Home() {
  return (<main>hello world</main>);
}
