import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface Props {
    setRegionId: Dispatch<SetStateAction<string>>;
    setSearch: Dispatch<SetStateAction<string | null>>;
    searchData: () => Promise<void>
}

export default function SearchBox({setRegionId, setSearch, searchData}: Props) {

    return (
        <div className="grid place-items-center">
            <div className="w-full max-w-3xl px-8 min-w-min grid place-items-center">
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