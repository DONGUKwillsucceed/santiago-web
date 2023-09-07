import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import { RegionDto } from "@/api/dto/user/region.dto";
import { magazineService } from "@/api/magazine/magazine";
import GlobalSwitch from "@/components/global-switch";
import HeaderBar from "@/components/header-bar";
import RegionDropDownBox from "@/components/region-drop-box";
import SearchBox from "@/components/search-box";
import { awardedUserLineDto, magazineLineDto, simpleMagazineLineDto } from "@/const/dummy";
import { SetStateAction, useEffect, useState } from "react";
import BestMagazineList from "@/components/best-magazine-list";
import BestUserList from "@/components/best-user-list";
import SimpleMagazineList from "@/components/simple-magazine-list";
import { regionService } from "@/api/region/region";

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

  useEffect(() => {
    const fetchMagazine = async () => {
      return magazineService.findMany(
        regionId,
        queryType,
        isGlobal ? null : window.navigator.language,
        base,
        limit,
        search
      );
    };

    fetchMagazine().then((data) => {
      console.log(data.data[0].likeCount);
      if (queryType == "hot") {
        setHotMagazineList(data);
      } else {
        setRecentMagazineList(data);
      }
    });
  }, [queryType, regionId, base, limit, isGlobal]);

  useEffect(() => {
    const fetchRegion = async () => {
      return regionService.findMany();
    };

    fetchRegion().then((data) => {
      setRegions(data);
    });
  }, []);

  const searchData = async () => {
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
      <HeaderBar needBackButton={false} loginInfo={null} />
      <div className="flex justify-center">
        <div className="w-[64rem] flex justify-between">
          <div className="w-[16rem] py-6">
            <div className="w-full bg-white rounded-xl">
              <RegionDropDownBox regions={regions} setRegionId={setRegionId} />
            </div>
            <div className="h-3" />
            <div className="w-full bg-white rounded-xl px-3">
              <GlobalSwitch isGlobal={isGlobal} setIsGlobal={setIsGlobal} />
            </div>
            <div className="h-6" />
            <div>
              <BestMagazineList
                title="🏞️ The picture here is so beautiful!"
                simpleMagazineLineDto={simpleMagazineLineDto}
              />
            </div>
            <div className="h-6" />
            <div>
              <BestMagazineList
                title="✍️ The writing here is really nice!"
                simpleMagazineLineDto={simpleMagazineLineDto}
              />
            </div>
            <div className="h-6" />
            <div>
              <BestUserList
                title="📷 The best Photographers!"
                awardedUserLineDto={awardedUserLineDto}
              />
            </div>
            <div className="h-6" />
            <div>
              <BestUserList
                title="✒️ The best Writers!"
                awardedUserLineDto={awardedUserLineDto}
              />
            </div>
            <div className="h-6" />
            <div>
              <BestUserList
                title="🏃‍♂️ The travel fanatics!"
                awardedUserLineDto={awardedUserLineDto}
              />
            </div>
          </div>
          <div className="w-[42rem] py-6">
            <SearchBox setSearch={setSearch} searchData={searchData} />
            <div className="h-6" />
            <SimpleMagazineList
              queryType={queryType}
              setQueryType={setQueryType}
              setBase={setBase}
              setLimit={setLimit}
              hotMagazineList={hotMagazineList}
              recentMagazineList={recentMagazineList}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
