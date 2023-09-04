import React, { Dispatch, SetStateAction } from "react";
import MagazineContainer from "./magazine-container";
import BasicTabs from "./tap-panel";
import EmptyCase from "./empty-case";
import { regionSelector } from "@/util/region-selector";
import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";

interface Props {
  queryType: string;
  setQueryType: Dispatch<SetStateAction<string>>;
  setBase: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  setIsGlobal: Dispatch<SetStateAction<boolean>>;
  hotMagazineList: MultiMagazineLineDto;
  recentMagazineList: MultiMagazineLineDto;
}

export default function SimpleMagazineList({
  setQueryType,
  setLimit,
  setBase,
  setIsGlobal,
  hotMagazineList,
  recentMagazineList,
  queryType,
}: Props) {
  const handleChange = async (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    if (newValue === 0) {
      setQueryType("hot");
    } else {
      setQueryType("recent");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-7xl px-1">
        <div>
          <BasicTabs
            value={queryType === "hot" ? 0 : 1}
            handleChange={handleChange}
            setIsGlobal={setIsGlobal}
            nodeForHot={
              hotMagazineList.data.length ? (
                <div className="flex justify-center flex-wrap">
                  {hotMagazineList.data.map((item) => (
                    <div className="flex pb-8" key={item.id}>
                      <div className="w-4" />
                      <MagazineContainer
                        id={item.id}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        writer={{
                          id: item.writer.id,
                          name: item.writer.name,
                          imageUrl: item.writer.imageUrl,
                          region: regionSelector(
                            item.writer.region,
                            window.navigator.language
                          ),
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
              recentMagazineList.data.length ? (
                <div className="flex justify-center flex-wrap">
                  {recentMagazineList.data.map((item) => (
                    <div className="flex pb-8" key={item.id}>
                    <div className="w-4" />
                    <MagazineContainer
                      id={item.id}
                      imageUrl={item.imageUrl}
                      title={item.title}
                      writer={{
                        id: item.writer.id,
                        name: item.writer.name,
                        imageUrl: item.writer.imageUrl,
                        region: regionSelector(
                          item.writer.region,
                          window.navigator.language
                        ),
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
          />
        </div>
      </div>
    </div>
  );
}
