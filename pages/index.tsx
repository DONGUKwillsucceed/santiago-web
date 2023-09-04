import HeaderBar from "@/components/header-bar";
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
      <div className="h-14"/>
      <SearchBox/>
      <div className="h-14"/>
      <SimpleMagazineList/>
      <div className="h-14"/>

    </div>
  );
}
