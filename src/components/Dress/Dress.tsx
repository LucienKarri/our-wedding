import { Paper, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";

export const Dress = () => {
  return (
    <SectionContainer>
      <Paper>
        <img
          src="/src/assets/palette.png"
          style={{ width: "100%", padding: "24px" }}
        />
      </Paper>

      <Typography variant="h5" align="center">
        Для нас главное - Ваше присуцтвие! Но мы будем рады, если в своих
        нарядах вы поддержите цветовую гамму нашей свадьбы
      </Typography>
    </SectionContainer>
  );
};
