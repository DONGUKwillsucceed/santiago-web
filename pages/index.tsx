import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import { magazineService } from "@/api/magazine/magazine";
import HeaderBar from "@/components/header-bar";
import SearchBox from "@/components/search-box";
import SimpleMagazineList from "@/components/simple-magazine-list";
import { useEffect, useState } from "react";

export default function Home() {
  const [regionId, setRegionId] = useState(
    "0bcbbb91-89bd-48f7-9562-ec662b6fd3a2"
  );
  const [queryType, setQueryType] = useState("hot");
  const [base, setBase] = useState(0);
  const [limit, setLimit] = useState(12);
  const [isGlobal, setIsGlobal] = useState(false);
  const [search, setSearch] = useState<string | null>(null);
  const [hotMagazineList, setHotMagazineList] = useState<MultiMagazineLineDto>({
    data: [],
    total: 0,
  });
  const [recentMagazineList, setRecentMagazineList] =
    useState<MultiMagazineLineDto>({
      data: [],
      total: 0,
    });

  useEffect(() => {
    const fetchData = async () => {
      return magazineService.findMany(
        regionId,
        queryType,
        isGlobal ? null : window.navigator.language,
        base,
        limit,
        search
      );
    };

    fetchData().then((data) => {
      if (queryType == "hot") {
        setHotMagazineList(data);
      } else {
        setRecentMagazineList(data);
      }
    });
  }, [queryType, regionId, base, limit, isGlobal]);

  const searchData = async () => {
    console.log('search');
    return magazineService
      .findMany(
        regionId,
        queryType,
        isGlobal ? null : window.navigator.language,
        base,
        limit,
        search
      )
      .then((data) => {
        if (queryType == "hot") {
          setHotMagazineList(data);
        } else {
          setRecentMagazineList(data);
        }
      });
  };

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
      <div className="lg:h-14 h-8" />
      <SearchBox setRegionId={setRegionId} setSearch={setSearch} searchData={searchData}/>
      <div className="lg:h-14 h-8" />
      <SimpleMagazineList
        queryType={queryType}
        setQueryType={setQueryType}
        setBase={setBase}
        setLimit={setLimit}
        setIsGlobal={setIsGlobal}
        hotMagazineList={hotMagazineList}
        recentMagazineList={recentMagazineList}
      />
      <div className="lg:h-14 h-8" />
    </div>
  );
}
