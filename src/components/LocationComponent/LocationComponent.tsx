import { Box, Button, Paper, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";
import placeImg from "../../assets/place.jpg";

export const LocationComponent = () => {
  return (
    <SectionContainer>
      <Typography variant="h5" align="center">
        Ждем вас по адресу: г.Орск, ул. Станиславского, 52В
      </Typography>
      <Paper>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <img
            src={placeImg}
            style={{ display: "block", borderRadius: "4px", maxWidth: "100%" }}
          />
          <Button
            variant="contained"
            fullWidth
            href="https://maps.yandex.ru/?ll=58.480695%2C51.236319&z=18&mode=whatshere&whatshere[point]=58.480555%2C51.236110&whatshere[zoom]=16"
          >
            Посмотреть на картах
          </Button>
        </Box>
      </Paper>
    </SectionContainer>
  );
};
