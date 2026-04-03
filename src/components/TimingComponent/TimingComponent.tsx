import { Box, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";

export const TimingComponent = () => {
  return (
    <SectionContainer>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box sx={{ width: "50%" }}>
          <img src="src/assets/start.png" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: "50%", padding: "12px" }}>
          <Typography variant="h4" color="primary">
            16:00
          </Typography>
          <Typography variant="h5">сбор гостей, фуршет</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box
          sx={{
            width: "50%",
            textAlign: "right",
            padding: "12px",
          }}
        >
          <Typography variant="h4" color="primary">
            16:30
          </Typography>
          <Typography variant="h5">выездная церемония</Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <img src="src/assets/rings.png" style={{ width: "100%" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box sx={{ width: "50%" }}>
          <img src="src/assets/cake.png" style={{ width: "100%" }} />
        </Box>
        <Box sx={{ width: "50%", padding: "12px" }}>
          <Typography variant="h4" color="primary">
            17:00
          </Typography>
          <Typography variant="h5">праздничная программа</Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box
          sx={{
            width: "50%",
            textAlign: "right",
            padding: "12px",
          }}
        >
          <Typography variant="h4" color="primary">
            23:00
          </Typography>
          <Typography variant="h5">окончание вечера</Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <img src="src/assets/end.png" style={{ width: "100%" }} />
        </Box>
      </Box>
      <Typography variant="h5" align="center">
        Мы не хотим обременять вас выбором подарка, поэтому будем рады подаркам
        в конвертах
      </Typography>
    </SectionContainer>
  );
};
