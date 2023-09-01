import HeaderBar from "@/components/header-bar";
import MainAdContainer from "@/components/main-ad-container";
import SearchBox from "@/components/search-box";
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
    </div>
  );
}
