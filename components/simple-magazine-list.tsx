import MainTitleContainer from "./main-title-container";
import BasicTabs from "./tap-panel";

export default function SimpleMagazineList() {
    return (
        <div className="flex justify-center">
            <div className="w-4/5 px-8">
                <MainTitleContainer title={"Mazagine"}/>
                <div className="px-3">
                <BasicTabs/>
                
                </div>
            </div>
        </div>
    )
}