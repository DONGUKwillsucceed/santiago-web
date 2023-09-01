import React, { useEffect } from "react";
import MagazineContainer from "./magazine-container";
import MainTitleContainer from "./main-title-container";
import MoreButton from "./more-button";
import BasicTabs from "./tap-panel";
import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import EmptyCase from "./empty-case";
import { regionSelector } from "@/util/region-selector";

export default function SimpleMagazineList() {
  const [value, setValue] = React.useState(0);
  const [isGlobal, setIsGlobal] = React.useState(false);
  const [hot, setHot] = React.useState<MultiMagazineLineDto>({
    data: [],
    total: 0,
  });
  const [recent, setRecent] = React.useState<MultiMagazineLineDto>({
    data: [],
    total: 0,
  });

  const fetchDataForHot = async () => {
    const data: MultiMagazineLineDto = {
      data: [
        {
          id: "abcd",
          imageUrl: null,
          title: "개발자가 가장 많이 읽은 아티클은 무엇일까?",
          createdAt: "2023.10.09",
          writer: {
            id: "abcd",
            name: "김동욱",
            imageUrl: null,
            region: {
              id: "abcd",
              name_en: "korea",
              name_hk: "korea",
              name_jp: "korea",
              name_kr: "대한민국",
            },
          },
        },
        {
          id: "abcd",
          imageUrl: null,
          title: "서울에서 예토전생",
          createdAt: "2023.10.09",
          writer: {
            id: "abcd",
            name: "김동욱",
            imageUrl: null,
            region: {
              id: "abcd",
              name_en: "korea",
              name_hk: "korea",
              name_jp: "korea",
              name_kr: "대한민국",
            },
          },
        },
        {
          id: "abcd",
          imageUrl: null,
          title: "서울에서 예토전생",
          createdAt: "2023.10.09",
          writer: {
            id: "abcd",
            name: "김동욱",
            imageUrl: null,
            region: {
              id: "abcd",
              name_en: "korea",
              name_hk: "korea1",
              name_jp: "korea2",
              name_kr: "대한민국",
            },
          },
        },
      ],
      total: 3,
    };
    return data;
  };

  const fetchDataForRecent = async () => {
    const data: MultiMagazineLineDto = {
      data: [
        {
          id: "abcd",
          imageUrl: null,
          title: "서울에서 예토전생",
          createdAt: "2023.10.09",
          writer: {
            id: "abcd",
            name: "김동욱",
            imageUrl: null,
            region: {
              id: "abcd",
              name_en: "korea",
              name_hk: "korea1",
              name_jp: "korea2",
              name_kr: "korea",
            },
          },
        },
      ],
      total: 1,
    };
    return data;
  };

  useEffect(() => {
    fetchDataForHot().then((res) => setHot(res));
    fetchDataForRecent().then((res) => setRecent(res));
  }, []);

  const handleChange = async (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setValue(newValue);
    fetchDataForHot().then((res) => setHot(res));
    fetchDataForRecent().then((res) => setRecent(res));
  };


  return (
    <div className="flex justify-center">
      <div className="w-4/5 px-8">
        <MainTitleContainer title={"Mazagine"} />
        <div className="px-3">
          <BasicTabs
            value={value}
            handleChange={handleChange}
            setIsGlobal={setIsGlobal}
            nodeForHot={
              hot.data.length ? (
                <div className="flex justify-start flex-wrap">
                  {hot.data.map((item) => (
                    <div className="flex  pb-5" key={item.id}>
                      <div className="w-4" />
                      <MagazineContainer
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        writer={{
                          id: item.writer.id,
                          name: item.writer.name,
                          imageUrl: item.writer.imageUrl,
                          region: regionSelector(item.writer.region, window.navigator.language),
                        }}
                        createdAt={item.createdAt}
                      />
                      <div className="w-4" />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyCase />
              )
            }
            nodeForRecent={
              recent.data.length ? (
                <div className="flex justify-between flex-wrap">
                  {recent.data.map((item) => (
                    <div className="flex">
                      <div className="w-5" />
                      <MagazineContainer
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        writer={{
                          id: item.writer.id,
                          name: item.writer.name,
                          imageUrl: item.writer.imageUrl,
                          region: item.writer.region.name_en,
                        }}
                        createdAt={item.createdAt}
                      />
                      <div className="w-5" />
                    </div>
                  ))}
                </div>
              ) : (
                <EmptyCase />
              )
            }
          />
        </div>
        <MoreButton />
      </div>
    </div>
  );
}
