import { RegionDto } from "@/api/dto/user/region.dto";
import { regionSelector } from "@/util/region-selector";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
  regions: RegionDto[];
  setRegionId: Dispatch<SetStateAction<string>>;
  defaultRegion: RegionDto;
}

import * as React from "react";
import { Box, Button, Modal } from "@mui/material";

export default function RegionDropDownBox({ regions, setRegionId, defaultRegion }: Props) {
  let locale = "ko-KR";
  const [isOpen, setIsOpen] = useState(false);
  const [curRegion, setCurRegion] = useState<RegionDto>(defaultRegion);

  React.useEffect(() => {
    locale = window.navigator.language;
  }, [defaultRegion]);

  return (
    <div>
      <Button
        fullWidth
        onClick={() => setIsOpen(true)}
        style={{ justifyContent: "flex-start", paddingLeft: 12 }}
      >
        {curRegion.flag} {regionSelector(curRegion, locale)}
      </Button>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 8,
            boxShadow: 24,
            p: 4,
          }}
        >
          <div className="text-[#525252] text-[18px]">Please select the country you want</div>
          <div className="h-[14px]"/>
          <div className="flex flex-wrap">
            {regions.map((region) => (
              <Button key={region.id} onClick={()=>{
                setCurRegion(region);
                setRegionId(region.id);
                setIsOpen(false);
              }}>
                {region.flag} {regionSelector(region, locale)}
              </Button>
            ))}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
