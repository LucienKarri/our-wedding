import { Button, Paper, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";
import placeImg from "../../assets/place.jpg";

export const LocationComponent = () => {
  return (
    <SectionContainer>
      <Typography variant="h5" align="center">
        Ждем вас по адресу: г.Орск, ул. Станиславского, 52В
      </Typography>
      <Paper>
        <img
          src={placeImg}
          style={{ display: "block", borderRadius: "4px", maxWidth: "100%" }}
        />
      </Paper>
      <Button variant="contained" fullWidth>
        Посмотреть на картах
      </Button>
    </SectionContainer>
  );
};
