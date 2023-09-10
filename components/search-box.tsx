import { RegionDto } from "@/api/dto/user/region.dto";
import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import RegionDropDownBox from "./region-drop-box";

interface Props {
  setSearch: Dispatch<SetStateAction<string | null>>;
  searchData: () => Promise<void>;
}

export default function SearchBox({ setSearch, searchData }: Props) {
  return (
    <div className="grid place-items-center">
      <div className="w-[32rem] flex justify-center items-center">
        <div className="w-full lg:h-12 md:h-10 rounded-full flex px-6 bg-white">
          <input
            className="outline focus:outline-0 outline-0 w-full border-0"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                searchData()
              }
            }}
          />
          <IconButton onClick={searchData}>
            <Search />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
