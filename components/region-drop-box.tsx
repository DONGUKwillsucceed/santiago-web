import { RegionDto } from "@/api/dto/user/region.dto";
import { regionSelector } from "@/util/region-selector";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  regions: RegionDto[];
  setRegionId: Dispatch<SetStateAction<string>>;
}

const defaultRegion: RegionDto = {
  id: "default",
  name_en: "All",
  name_ch: "全部",
  name_fr: "Totalité",
  name_ge: "Gesamt",
  name_hk: "全部",
  name_it: "Intero",
  name_jp: "全体",
  name_kr: "전체",
  name_vi: "Toàn bộ",
  flag: "🌏",
};

import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function RegionDropDownBox({ regions, setRegionId }: Props) {

  const handleChange = (event: SelectChangeEvent) => {
    console.log(event.target.value as string);
    setRegionId(event.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <Select
        sx={{
          boxShadow: "none",
          ".MuiOutlinedInput-notchedOutline": { border: 0 },
        }}
        defaultValue={defaultRegion.id}
        inputProps={{
          name: "age",
          id: "uncontrolled-native",
        }}
        onChange={handleChange}
      >
        {regions.length
          ? regions.map((item) => <option value={item.id}>{regionSelector(item, window.navigator.language)}</option>)
          : null}
      </Select>
    </FormControl>
  );
}
