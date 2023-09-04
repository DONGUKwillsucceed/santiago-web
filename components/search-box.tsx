import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function SearchBox() {
    return (
        <div className="grid place-items-center">
            <div className="w-full max-w-3xl px-8 min-w-min grid place-items-center">
                <div className="w-full lg:h-14 md:h-10 border rounded-full shadow-lg flex px-6">
                    <input className="outline focus:outline-0 outline-0 w-full"/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}