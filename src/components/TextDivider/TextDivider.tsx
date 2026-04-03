import { Box } from "@mui/material";
import type { FC } from "react";

export const TextDivider: FC<{ url: string; size: string }> = ({
  url,
  size,
}) => {
  return (
    <Box
      sx={{
        bgcolor: "#e3d2be",
        padding: "12px",
        backgroundImage: `url(${url})`,
        backgroundSize: `${size}`,
        backgroundRepeat: "repeat-x",
        backgroundPosition: "center",
        backgroundPositionX: "16px",
        backgroundPositionY: "6px",
        width: "100%",
        minHeight: "40px",
        margin: "48px 0",
      }}
    ></Box>
  );
};
