import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { House, Public } from "@mui/icons-material";

interface Props {
  setIsGlobal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function LanguageToggleButton({ setIsGlobal }: Props) {
  const [alignment, setAlignment] = React.useState("home");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    if (newAlignment === "global") {
      setIsGlobal(true);
    } else {
      setIsGlobal(false);
    }
  };

  const children = [
    <ToggleButton value="home" key="left">
      <House />
    </ToggleButton>,
    <ToggleButton value="global" key="center">
      <Public />
    </ToggleButton>,
  ];

  const control = {
    value: alignment,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <ToggleButtonGroup
      sx={{ height: 32 }}
      {...control}
      aria-label="Small sizes"
    >
      {children}
    </ToggleButtonGroup>
  );
}
