import MainTitleContainer from "./main-title-container";
import MoreButton from "./more-button";
import BasicTabs from "./tap-panel";

export default function SimpleAgoraList() {
  return (
    <div className="flex justify-center">
      <div className="w-4/5 px-8">
        <MainTitleContainer title={"Agora"} />
        <div className="px-3">
          <BasicTabs />
        </div>
        <MoreButton/>
      </div>
    </div>
  );
}
