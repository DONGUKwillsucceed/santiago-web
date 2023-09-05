import { RegionDto } from "@/api/dto/user/region.dto";
import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import RegionDropDownBox from "./region-drop-box";

interface Props {
    setRegionId: Dispatch<SetStateAction<string>>;
    setSearch: Dispatch<SetStateAction<string | null>>;
    searchData: () => Promise<void>;
    regions: RegionDto[]
}

export default function SearchBox({setRegionId, setSearch, searchData, regions}: Props) {

    return (
        <div className="grid place-items-center">
            <div className="w-full max-w-3xl px-8 min-w-min flex justify-center items-center">
                <div className="w-full lg:h-14 md:h-10 border rounded-full shadow-lg flex px-6">
                    <input className="outline focus:outline-0 outline-0 w-full" onChange={(e)=> {setSearch(e.target.value)}}/>
                    <IconButton onClick={searchData}>
                        <Search/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}