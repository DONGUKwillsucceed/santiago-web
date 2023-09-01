import React, { useEffect } from "react";
import MainTitleContainer from "./main-title-container";
import MoreButton from "./more-button";
import BasicTabs from "./tap-panel";
import EmptyCase from "./empty-case";
import { regionSelector } from "@/util/region-selector";
import { MultiAgoraLineDto } from "@/api/dto/agora/multi-agora-line-dto";
import { AgoraContainer } from "./agora-container";

export default function SimpleAgoraList() {
  const [value, setValue] = React.useState(0);
  const [isGlobal, setIsGlobal] = React.useState(false);
  const [hot, setHot] = React.useState<MultiAgoraLineDto>({
    data: [],
    total: 0,
  });
  const [recent, setRecent] = React.useState<MultiAgoraLineDto>({
    data: [],
    total: 0,
  });

  const fetchDataForHot = async () => {
    const data: MultiAgoraLineDto = {
      data: [
        {
          id: "abcd",
          imageUrl: null,
          content: "안녕하세요! 유럽 여행을 즐겨 다니는 금수저 대학생입니다! 돈 많은 남성분이랑 여행가는거 좋아하고요! 돈 없으면 개인적으로 연락을 삼가해주세요~",
          createdAt: "2023.10.09",
          likeCount: 0,
          replyCount: 0,
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
        {
          id: "abcd",
          imageUrl: null,
          content: "lets go",
          createdAt: "2023.10.09",
          likeCount: 0,
          replyCount: 0,
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
        {
          id: "abcd",
          imageUrl: null,
          content: "lets go",
          createdAt: "2023.10.09",
          likeCount: 0,
          replyCount: 0,
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
      total: 0,
    };
    return data;
  };

  const fetchDataForRecent = async () => {
    const data: MultiAgoraLineDto = {
      data: [
        {
          id: "abcd",
          imageUrl: null,
          content: "lets go",
          createdAt: "2023.10.09",
          likeCount: 0,
          replyCount: 0,
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
        <MainTitleContainer title={"Agora"} />
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
                      <AgoraContainer
                        id={item.id}
                        imageUrl={item.imageUrl}
                        content={item.content}
                        likeCount={item.likeCount}
                        replyCount={item.replyCount}
                        createdAt={item.createdAt}
                        writer={{
                          id: item.writer.id,
                          name: item.writer.name,
                          imageUrl: item.writer.imageUrl,
                          region: regionSelector(
                            item.writer.region,
                            window.navigator.language
                          ),
                        }}
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
                    <div className="flex pb-5" key={item.id}>
                      <div className="w-4" />
                      <AgoraContainer
                        id={item.id}
                        imageUrl={item.imageUrl}
                        content={item.content}
                        likeCount={item.likeCount}
                        replyCount={item.replyCount}
                        createdAt={item.createdAt}
                        writer={{
                          id: item.writer.id,
                          name: item.writer.name,
                          imageUrl: item.writer.imageUrl,
                          region: regionSelector(
                            item.writer.region,
                            window.navigator.language
                          ),
                        }}
                      />
                      <div className="w-4" />
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
