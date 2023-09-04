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
      <div className="lg:h-14 h-8"/>
      <SearchBox/>
      <div className="lg:h-14 h-8"/>
      <SimpleMagazineList/>
      <div className="lg:h-14 h-8"/>

    </div>
  );
}
