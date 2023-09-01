import { KeyboardArrowRight } from "@mui/icons-material";

export default function MoreButton() {
    return (
        <div onClick={()=>alert("more")} className="px-3 cursor-pointer flex justify-end items-center">
            <p className="text-gray-400 text-sm text-center">more</p>
            <KeyboardArrowRight className="text-gray-400" sx={{ fontSize: 14 }}/>
        </div>
    )
}