import HeaderBar from "@/components/header-bar";
import MainAdContainer from "@/components/main-ad-container";

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
