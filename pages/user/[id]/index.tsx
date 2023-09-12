import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import { SimpleMagazineLineDto } from "@/api/dto/magazine/simple-magazine-line.dto";
import { RegionDto } from "@/api/dto/user/region.dto";
import { UserDto } from "@/api/dto/user/user.dto";
import { magazineService } from "@/api/magazine/magazine";
import { regionService } from "@/api/region/region";
import { userSerivce } from "@/api/user/user";
import BestMagazineList from "@/components/best-magazine-list";
import BigUserProfileCard from "@/components/big-user-profile-card";
import GlobalSwitch from "@/components/global-switch";
import HeaderBar from "@/components/header-bar";
import RegionDropDownBox from "@/components/region-drop-box";
import SearchBox from "@/components/search-box";
import SimpleMagazineList from "@/components/simple-magazine-list";
import { regionDefault } from "@/const/dummy";
import userStore from "@/store/user-store";
import { regionSelector } from "@/util/region-selector";
import { Edit } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function User(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  let locale = "ko-KR";
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
  const router = useRouter();

  const [bestPhotoMagazineList, setBestPhotoMagazineList] = useState<
    SimpleMagazineLineDto[]
  >([]);
  const [bestWritingMagazineList, setBestWritingMagazineList] = useState<
    SimpleMagazineLineDto[]
  >([]);
  const [isMine, setIsMine] = useState(false);

  const { id, name, imageUrl, reset } = userStore();
  const [loginInfo, setLoginInfo] = useState<{
    id: string;
    name: string;
    imageUrl: string | null;
  } | null>(null);

  useEffect(() => {
    locale = window.navigator.language;
    if (props.data.id === id) setIsMine(true);

    if (id !== "") {
      setLoginInfo({ id, name, imageUrl });
    }
    const fetchMagazine = async () => {
      return magazineService.findMany(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        queryType,
        isGlobal ? null : window.navigator.language,
        base,
        limit,
        search,
        props.data.id
      );
    };

    const fetchBestWritingMagazine = async () => {
      return magazineService.findManyForBest(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        "writing-best",
        isGlobal ? null : window.navigator.language,
        0,
        5,
        id
      );
    };

    const fetchBestPhotoMagazine = async () => {
      return magazineService.findManyForBest(
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        "photo-best",
        isGlobal ? null : window.navigator.language,
        0,
        5,
        id
      );
    };

    fetchMagazine().then((data) => {
      if (queryType == "hot") {
        setHotMagazineList(data);
      } else {
        setRecentMagazineList(data);
      }
    });

    fetchBestPhotoMagazine().then((data) => {
      setBestPhotoMagazineList(data);
    });
    fetchBestWritingMagazine().then((data) => {
      setBestWritingMagazineList(data);
    });
  }, [queryType, isGlobal, regionId, isGlobal, base, limit]);

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
        regionId !== "9575b497-f677-4b4a-94fa-1de79763e035" ? regionId : null,
        queryType,
        isGlobal ? null : window.navigator.language,
        base,
        limit,
        search,
        id
      )
      .then((data) => {
        if (queryType == "hot") {
          setHotMagazineList(data);
        } else {
          setRecentMagazineList(data);
        }
      });
  };

  const logOut = () => {
    reset();
    window.localStorage.clear();
    router.push("/");
  };

  return (
    <div>
      <HeaderBar needBackButton={false} loginInfo={loginInfo} />
      <div className="flex justify-center">
        <div className="w-[64rem] flex justify-between">
          <div className="w-[16rem] py-6">
            <div className="w-full bg-white rounded-xl">
              <RegionDropDownBox regions={regions} setRegionId={setRegionId} defaultRegion={regionDefault} />
            </div>
            <div className="h-3" />
            <div className="w-full bg-white rounded-xl px-3">
              <GlobalSwitch isGlobal={isGlobal} setIsGlobal={setIsGlobal} />
            </div>
            <div className="h-6" />
            <div className="w-full bg-white rounded-xl px-3 py-[12px]">
              <BigUserProfileCard
                id={props.data.id}
                name={props.data.name}
                region={regionSelector(props.data.region, locale)}
                imageUrl={props.data.imageUrl}
              />
              <div className="h-[20px]" />
              <div className="text-[#404040] text-[14px] flex">
                ❤️ Subscribers
                <div className="w-6" />
                {props.data.subscriberCount}
              </div>
              <div className="text-[#404040] text-[14px] flex">
                📒 Columnists
                <div className="w-7" />
                {props.data.columnistCount}
              </div>
            </div>
            <div className="h-6" />
            <div className="w-full bg-white rounded-xl px-3 py-[9px]">
              <div className="flex justify-between items-center">
                <div className="text-[#404040] text-[14px]">
                  🔥 Fanatic Score
                </div>
                <div>{props.data.fanaticScore}</div>
              </div>
              <div className="h-[5px]" />
              <div className="flex justify-between items-center">
                <div className="text-[#404040] text-[14px]">
                  🏞️ Picture Score
                </div>
                <div>{props.data.pictureScore}</div>
              </div>
              <div className="h-[5px]" />
              <div className="flex justify-between items-center">
                <div className="text-[#404040] text-[14px]">
                  ✒️ Writing Score
                </div>
                <div>{props.data.writingScore}</div>
              </div>
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
            {isMine ? (
              <>
                <div
                  onClick={logOut}
                  className="w-full bg-white rounded-xl px-3 py-[9px] flex justify-center hover:cursor-pointer"
                >
                  <div className="text-[16px] text-[#E84033]">Log out</div>
                </div>
                <div className="h-6" />
                <div className="w-full bg-white rounded-xl px-3 py-[9px] flex justify-center hover:cursor-pointer">
                  <div className="text-[16px] text-[#E84033]">
                    Account cancellation
                  </div>
                </div>
                <div className="h-6" />
              </>
            ) : null}
          </div>
          <div>
            <div className="w-[42rem] py-6">
              <div className="flex justify-center">
                {isMine ? (
                  <>
                    <div className="w-12" />
                    <SearchBox setSearch={setSearch} searchData={searchData} />
                    <div className="w-2" />
                    <IconButton
                      onClick={() => {
                        router.push("/magazine/create");
                      }}
                    >
                      <Edit />
                    </IconButton>
                  </>
                ) : (
                  <SearchBox setSearch={setSearch} searchData={searchData} />
                )}
              </div>
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
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;

  let data: UserDto = {
    id: "",
    name: "",
    imageUrl: null,
    subscriberCount: 0,
    columnistCount: 0,
    pictureScore: 10,
    writingScore: 10,
    fanaticScore: 10,
    region: regionDefault,
  };

  if (typeof id === "string" && id !== "santiago_gray.svg") {
    data = await userSerivce.findUnique(id);
  }
  return {
    props: {
      data,
    },
  };
};
