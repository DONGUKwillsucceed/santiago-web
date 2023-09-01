import React, { useEffect } from "react";
import MagazineContainer from "./magazine-container";
import MainTitleContainer from "./main-title-container";
import MoreButton from "./more-button";
import BasicTabs from "./tap-panel";
import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import EmptyCase from "./empty-case";

export default function SimpleMagazineList() {
  const [value, setValue] = React.useState(0);
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
      data: [],
      total: 0,
    };
    return data;
  };

  const fetchDataForRecent = async () => {
    const data: MultiMagazineLineDto = {
      data: [],
      total: 0,
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
            nodeForHot={hot.data.length ? null: <EmptyCase/>}
            nodeForRecent={recent.data.length ? null : <EmptyCase/>}
          />
        </div>
        <MoreButton />
      </div>
    </div>
  );
}
