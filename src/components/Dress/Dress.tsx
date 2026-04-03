import { Paper, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";
import paletteImg from "../../assets/palette.png";

export const Dress = () => {
  return (
    <SectionContainer>
      <Paper>
        <img src={paletteImg} style={{ width: "100%", padding: "24px" }} />
      </Paper>

      <Typography variant="h5" align="center">
        Для нас главное - Ваше присуцтвие! Но мы будем рады, если в своих
        нарядах вы поддержите цветовую гамму нашей свадьбы
      </Typography>
    </SectionContainer>
  );
};
