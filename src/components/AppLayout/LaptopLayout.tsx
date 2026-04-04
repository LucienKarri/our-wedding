import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import type { FC, PropsWithChildren } from "react";
import { theme } from "../../theme";

export const LaptopLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          padding: "24px",
        }}
      >
        {children}
      </Box>
    </ThemeProvider>
  );
};
