import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import { theme } from "../../theme";

export const AppLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
