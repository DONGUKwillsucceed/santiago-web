import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Props {
  value: number;
  handleChange: (
    event: React.SyntheticEvent,
    newValue: number
  ) => Promise<void>;
  nodeForHot: React.ReactNode;
  nodeForRecent: React.ReactNode;
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ nodeForHot, nodeForRecent, value, handleChange}: Props) {
  return (
    <Box sx={{ width: "100%" }}>
      <Box className="flex justify-between" sx={{ borderBottom: 1, borderColor: "divider" }}>
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
        {nodeForHot}
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        {nodeForRecent}
      </CustomTabPanel>
    </Box>
  );
}
