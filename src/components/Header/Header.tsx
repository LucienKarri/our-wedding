import { Box, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";

export const Header = () => {
  return (
    <SectionContainer>
      <Typography variant="h5">наконец-то</Typography>
      <Typography color="primary" variant="h4">
        МЫ ЖЕНИМСЯ
      </Typography>
      <Box>
        <img
          src="src/assets/our-photo.png"
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
