import { Box } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

export const SectionContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 24px",
        gap: "12px",
      }}
    >
      {children}
    </Box>
  );
};
