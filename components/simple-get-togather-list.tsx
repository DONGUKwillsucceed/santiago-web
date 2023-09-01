import React, { useEffect } from "react";
import MagazineContainer from "./magazine-container";
import MainTitleContainer from "./main-title-container";
import MoreButton from "./more-button";
import BasicTabs from "./tap-panel";
import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import EmptyCase from "./empty-case";
import { regionSelector } from "@/util/region-selector";
import { MultiGetTogatherLineDto } from "@/api/dto/get-togather/multi-get-togather-line-dto";
import GetTogatherContainer from "./get-togather-container";

export default function SimpleGetTogatherList() {
  const [value, setValue] = React.useState(0);
  const [isGlobal, setIsGlobal] = React.useState(false);
  const [hot, setHot] = React.useState<MultiGetTogatherLineDto>({
    data: [],
    total: 0,
  });
  const [recent, setRecent] = React.useState<MultiGetTogatherLineDto>({
    data: [],
    total: 0,
  });

  const fetchDataForHot = async () => {
    const data: MultiGetTogatherLineDto = {
      data: [
        {
          id: "abcd",
          imageUrl: null,
          title: "서울에서 예토전생",
          content: "안녕하세요! 유럽 여행을 즐겨 다니는 금수저 대학생입니다! 돈 많은 남성분이랑 여행가는거 좋아하고요! 돈 없으면 개인적으로 연락을 삼가해주세요~안녕하세요! 유럽 여행을 즐겨 다니는 금수저 대학생입니다! 돈 많은 남성분이랑 여행가는거 좋아하고요! 돈 없으면 개인적으로 연락을 삼가해주세요~",
          from: null,
          to: null,
          memberCapacity: 2,
          memberCount: 2,
          isRecruitting: true,
        },
        {
          id: "abcd",
          imageUrl: null,
          title: "서울에서 예토전생",
          content: "서울로 여행을 떠날 생각입니다. 어서들 모이세요!",
          from: "10.11",
          to: "10.13",
          memberCapacity: null,
          memberCount: 2,
          isRecruitting: true,
        },
        {
          id: "abcd",
          imageUrl: null,
          title: "서울에서 예토전생",
          content: "서울로 여행을 떠날 생각입니다. 어서들 모이세요!",
          from: "10.11",
          to: "10.13",
          memberCapacity: null,
          memberCount: 2,
          isRecruitting: false,
        },
      ],
      total: 3,
    };
    return data;
  };

  const fetchDataForRecent = async () => {
    const data: MultiGetTogatherLineDto = {
      data: [
        {
          id: "abcd",
          imageUrl: null,
          title: "서울에서 예토전생",
          content: "서울로 여행을 떠날 생각입니다. 어서들 모이세요!",
          from: null,
          to: null,
          memberCapacity: 2,
          memberCount: 2,
          isRecruitting: true,
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
        <MainTitleContainer title={"Get Togather"} />
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
                      <GetTogatherContainer
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        content={item.content}
                        from={item.from}
                        to={item.to}
                        memberCount={item.memberCount}
                        memberCapacity={item.memberCapacity}
                        isRecruitting={item.isRecruitting}
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
                      <GetTogatherContainer
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        content={item.content}
                        from={item.from}
                        to={item.to}
                        memberCount={item.memberCount}
                        memberCapacity={item.memberCapacity}
                        isRecruitting={item.isRecruitting}
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
