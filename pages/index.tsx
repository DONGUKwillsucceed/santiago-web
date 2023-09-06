import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import { RegionDto } from "@/api/dto/user/region.dto";
import { magazineService } from "@/api/magazine/magazine";
import { regionService } from "@/api/region/region";
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
  const [regions, setRegions] = useState<RegionDto[]>([]);
  const [hotMagazineList, setHotMagazineList] = useState<MultiMagazineLineDto>({
    data: [],
    total: 0,
  });
  const [recentMagazineList, setRecentMagazineList] =
    useState<MultiMagazineLineDto>({
      data: [],
      total: 0,
    });

  // useEffect(() => {
  //   const fetchMagazine = async () => {
  //     return magazineService.findMany(
  //       regionId,
  //       queryType,
  //       isGlobal ? null : window.navigator.language,
  //       base,
  //       limit,
  //       search
  //     );
  //   };

  //   fetchMagazine().then((data) => {
  //     if (queryType == "hot") {
  //       setHotMagazineList(data);
  //     } else {
  //       setRecentMagazineList(data);
  //     }
  //   });
  // }, [queryType, regionId, base, limit, isGlobal]);


  // useEffect(() => {
  //   const fetchRegion = async () => {
  //     return regionService.findMany();
  //   };

  //   fetchRegion().then((data) => {
  //     setRegions(data);
  //   });
  // }, []);

  // const searchData = async () => {
  //   return magazineService
  //     .findMany(
  //       regionId,
  //       queryType,
  //       isGlobal ? null : window.navigator.language,
  //       base,
  //       limit,
  //       search
  //     )
  //     .then((data) => {
  //       if (queryType == "hot") {
  //         setHotMagazineList(data);
  //       } else {
  //         setRecentMagazineList(data);
  //       }
  //     });
  // };

  return (
    <div>
      <HeaderBar
        needBackButton={false}
        loginInfo={null}
      />
    </div>
  );
}
