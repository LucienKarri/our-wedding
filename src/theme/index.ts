import { createTheme } from "@mui/material";
import type {} from "@mui/x-date-pickers/themeAugmentation";

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: "#BFA58A",
      light: "#E3D2BE",
      dark: "#9E866E",
      contrastText: "#2B2B2B",
    },

    secondary: {
      main: "#E3D2BE",
      light: "#F2E6DA",
      dark: "#CDB8A1",
      contrastText: "#2B2B2B",
    },

    background: {
      default: "#FFFFF0",
      paper: "#FFFFFF",
    },

    text: {
      primary: "#2B2B2B",
      secondary: "#6F6256",
      disabled: "#B5ADA4",
    },

    divider: "#E8DED2",

    success: { main: "#7A8F7A" },
    error: { main: "#C65A5A" },
    warning: { main: "#C89B5D" },
    info: { main: "#8B6F5A" },

    // background: {
    //   default: "#FFFFF0",
    //   paper: "#FFFFFF",
    // },
    // text: {
    //   primary: "#2B2B2B",
    //   secondary: "#6B6B6B",
    // },
    // primary: {
    //   main: "#FF4F6D",
    //   light: "#FF8A9D",
    //   dark: "#E8435F",
    // },
    // divider: "#F0E5E3",
  },
  typography: {
    fontFamily: "Caveat",
  },
  components: {
    MuiDateCalendar: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
    MuiPickersArrowSwitcher: {
      styleOverrides: {
        root: {
          display: "none",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
        font-family: "Caveat";
        src: url("Caveat-Medium.woff2") format("woff2");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
        }

        @font-face {
        font-family: "Caveat";
        src: url("Caveat-Bold.woff2") format("woff2");
        font-weight: bold;
        font-style: normal;
        font-display: swap;
        }

        @font-face {
        font-family: "Caveat";
        src: url("Caveat-Regular.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
        }

        @font-face {
        font-family: "Caveat";
        src: url("Caveat-SemiBold.woff2") format("woff2");
        font-weight: 600;
        font-style: normal;
        font-display: swap;
        }

        @font-face {
        font-family: "Caveat";
        src: url("Caveat-Regular.woff2") format("woff2");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
        }
      `,
    },
  },
});
