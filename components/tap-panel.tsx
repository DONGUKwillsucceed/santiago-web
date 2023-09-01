import { MultiMagazineLineDto } from "@/api/dto/magazine/multi-magazine-line.dto";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useEffect } from "react";
import EmptyCase from "./empty-case";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [hot, setHot] = React.useState<MultiMagazineLineDto>({
    data: [],
    total: 0,
  });
  const [recent, setRecent] = React.useState<MultiMagazineLineDto>({
    data: [],
    total: 0
  });

  
  const fetchDataForHot = async () => {
    const data: MultiMagazineLineDto = {
      data: [],
      total: 0,
    };
    return data;
  };

  const fetchDataForRecent = async () => {
    const data: MultiMagazineLineDto = {
      data: [],
      total: 0,
    };
    return data;
  };

  useEffect(() => {
    fetchDataForHot().then((res) => setHot(res));
    fetchDataForRecent().then((res) => setRecent(res));
  }, []);
  

  const handleChange = async (event: React.SyntheticEvent, newValue: number) => {  
    setValue(newValue);
    fetchDataForHot().then((res) => setHot(res));
    fetchDataForRecent().then((res) => setRecent(res));
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="🔥 Hot" {...a11yProps(0)} />
          <Tab label="🏃‍♂️ Recent" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {hot.data.length ? null : <EmptyCase/>}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {recent.data.length ? null : <EmptyCase/>}
      </CustomTabPanel>
    </Box>
  );
}
