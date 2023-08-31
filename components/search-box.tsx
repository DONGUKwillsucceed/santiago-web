import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";

export default function SearchBox() {
    return (
        <div className="flex justify-center">
            <div className="w-4/5 px-8 flex justify-center">
                
                <div className="w-6/12 h-14 border rounded-full shadow-lg flex px-6">
                    <input className="outline focus:outline-0 outline-0 w-full"/>
                    <IconButton>
                        <Search/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}