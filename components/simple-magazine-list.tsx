import { Tab, Tabs } from "@mui/material";
import MainTitleContainer from "./main-title-container";
import { useState } from "react";
import TabPanel from "./tap-panel";
import BasicTabs from "./tap-panel";

export default function SimpleMagazineList() {
    const a11yProps = (index: number) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }

      const [value, setValue] = useState(0);

      const handleChange = (event: Event, newValue: number) => {
        setValue(newValue);
      }
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