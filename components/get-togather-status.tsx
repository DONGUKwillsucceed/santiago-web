import { Box } from "@mui/material";

interface Props {
  isRecruitting: boolean;
}

export default function GetTogatherStatus({ isRecruitting }: Props) {
  return (
    <div>
      {isRecruitting ? (
        <Box className="text-xs text-teal-400"
        border={1}
        borderLeft={1}
        borderRight={1}
        borderRadius={3}
        sx={{ padding: 1 }}
      >
        모집 중
      </Box>
      ) : (
        <Box className="text-xs text-gray-400"
          border={1}
          borderLeft={1}
          borderRight={1}
          borderRadius={3}
          sx={{ padding: 1 }}
        >
          모집 끝
        </Box>
      )}
    </div>
  );
}
