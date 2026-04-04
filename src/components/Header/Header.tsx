import { Box, Typography, useTheme } from "@mui/material";
import { SectionContainer } from "../SectionContainer";
import ourPhotoImg from "../../assets/our-photo.png";

export const Header = () => {
  const theme = useTheme();
  return (
    <SectionContainer>
      <Typography variant="h5">наконец-то</Typography>
      <Typography color="primary" variant="h4">
        МЫ ЖЕНИМСЯ
      </Typography>
      <Box
        sx={{
          [theme.breakpoints.up("md")]: {
            width: "60%",
          },
        }}
      >
        <img
          src={ourPhotoImg}
          style={{
            width: "100%",
            filter:
              "drop-shadow(0px 0px 5px #BFA58A) drop-shadow(5px 0px 0px  #BFA58A) drop-shadow(0px 5px 0px  #BFA58A)",
          }}
        />
      </Box>
    </SectionContainer>
  );
};
