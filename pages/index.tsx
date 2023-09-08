import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import { RegionDto } from "@/api/dto/user/region.dto";
import { magazineService } from "@/api/magazine/magazine";
import GlobalSwitch from "@/components/global-switch";
import HeaderBar from "@/components/header-bar";
import RegionDropDownBox from "@/components/region-drop-box";
import SearchBox from "@/components/search-box";
import { useEffect, useState } from "react";
import BestMagazineList from "@/components/best-magazine-list";
import BestUserList from "@/components/best-user-list";
import SimpleMagazineList from "@/components/simple-magazine-list";
import { regionService } from "@/api/region/region";
import { SimpleMagazineLineDto } from "@/api/dto/magazine/simple-magazine-line.dto";
import { AwardedUserLineDto } from "@/api/dto/user/awarded-user-line.dto";
import { userSerivce } from "@/api/user/user";

export default function Home() {
  const [regionId, setRegionId] = useState(
    "9575b497-f677-4b4a-94fa-1de79763e035"
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
  const [bestPhotoMagazineList, setBestPhotoMagazineList] = useState<
    SimpleMagazineLineDto[]
  >([]);
  const [bestWritingMagazineList, setBestWritingMagazineList] = useState<
    SimpleMagazineLineDto[]
  >([]);
  const [bestPhotographer, setBestPhotographer] = useState<
    AwardedUserLineDto[]
  >([]);
  const [bestWriter, setBestWriter] = useState<AwardedUserLineDto[]>([]);
  const [bestFanatic, setBestFanatic] = useState<AwardedUserLineDto[]>([]);

  useEffect(() => {
    const fetchMagazine = async () => {
      return magazineService.findMany(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        queryType,
        isGlobal ? null : window.navigator.language,
        base,
        limit,
        search
      );
    };

    const fetchBestPhotoMagazine = async () => {
      return magazineService.findManyForBest(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        "photo-best",
        isGlobal ? null : window.navigator.language,
        0,
        5
      );
    };

    const fetchBestWritingMagazine = async () => {
      return magazineService.findManyForBest(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        "writing-best",
        isGlobal ? null : window.navigator.language,
        0,
        5
      );
    };

    const fetchBestPhotographer = async () => {
      return userSerivce.findManyForBest(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        "photo-best",
        0,
        5
      );
    };

    const fetchBestWriter = async () => {
      return userSerivce.findManyForBest(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        "writing-best",
        0,
        5
      );
    };

    const fetchBestFanatic = async () => {
      return userSerivce.findManyForBest(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        "fantic-best",
        0,
        5
      );
    };

    fetchBestPhotoMagazine().then((data) => {
      setBestPhotoMagazineList(data);
    });

    fetchBestWritingMagazine().then((data) => {
      setBestWritingMagazineList(data);
    });

    fetchBestFanatic().then((data) => {
      setBestFanatic(data);
    });

    fetchBestPhotographer().then((data) => setBestPhotographer(data));

    fetchBestWriter().then((data) => setBestWriter(data));

    fetchMagazine().then((data) => {
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
              {bestPhotoMagazineList.length != 0 ? (
                <BestMagazineList
                  title="🏞️ The picture here is so beautiful!"
                  simpleMagazineLineDto={bestPhotoMagazineList}
                />
              ) : null}
            </div>
            <div className="h-6" />
            <div>
              {bestWritingMagazineList.length != 0 ? (
                <BestMagazineList
                  title="✍️ The writing here is really nice!"
                  simpleMagazineLineDto={bestWritingMagazineList}
                />
              ) : null}
            </div>
            <div className="h-6" />
            <div>
              {bestPhotographer.length != 0 ? (
                <BestUserList
                  title="📷 The best Photographers!"
                  awardedUserLineDto={bestPhotographer}
                />
              ) : null}
            </div>
            <div className="h-6" />
            <div>
              {bestWriter.length != 0 ? (
                <BestUserList
                  title="✒️ The best Writers!"
                  awardedUserLineDto={bestWriter}
                />
              ) : null}
            </div>
            <div className="h-6" />
            <div>
              {bestFanatic.length != 0 ? (
                <BestUserList
                  title="🏃‍♂️ The travel fanatics!"
                  awardedUserLineDto={bestFanatic}
                />
              ) : null}
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
