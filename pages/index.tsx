import HeaderBar from "@/components/header-bar";
import MainAdContainer from "@/components/main-ad-container";
import SearchBox from "@/components/search-box";
import SimpleAgoraList from "@/components/simple-agora-list";
import SimpleGetTogatherList from "@/components/simple-get-togather-list";
import SimpleMagazineList from "@/components/simple-magazine-list";

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
      <MainAdContainer imageUrl={"/main_ad_banner.png"} />
      <div className="h-4"/>
      <div className="h-4"/>
      <SearchBox/>
      <div className="h-14"/>
      <SimpleMagazineList/>
      <div className="h-14"/>
      <SimpleAgoraList/>
      <div className="h-14"/>
      <SimpleGetTogatherList/>
      <div className="h-14"/>

    </div>
  );
}
