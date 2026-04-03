import { Paper, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";
import paletteImg from "../../assets/palette.png";
import { useUserInfo } from "../../contexts";

export const Dress = () => {
  const guest = useUserInfo();
  return (
    <SectionContainer>
      <Paper>
        <img src={paletteImg} style={{ width: "100%", padding: "24px" }} />
      </Paper>

      <Typography variant="h5" align="center">
        {`Для нас главное - ${guest.family === "true" ? "ваше" : guest.sex === "male" ? "твое" : "твое"} присуцтвие! Но мы будем рады, если в своих
        нарядах ${guest.family === "true" ? "вы поддержите" : guest.sex === "male" ? "ты поддержишь" : "ты поддержишь"} цветовую гамму нашей свадьбы`}
      </Typography>
    </SectionContainer>
  );
};
