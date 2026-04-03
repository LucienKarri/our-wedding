import { Box, Typography } from "@mui/material";
import { SectionContainer } from "../SectionContainer";
import cake from "../../assets/cake.png";
import start from "../../assets/start.png";
import rings from "../../assets/rings.png";
import end from "../../assets/end.png";
import { useUserInfo } from "../../contexts";

export const TimingComponent = () => {
  const guest = useUserInfo();
  return (
    <SectionContainer>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box sx={{ width: "50%" }}>
          <img src={start} style={{ width: "100%" }} />
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
          <img src={rings} style={{ width: "100%" }} />
        </Box>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Box sx={{ width: "50%" }}>
          <img src={cake} style={{ width: "100%" }} />
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
          <img src={end} style={{ width: "100%" }} />
        </Box>
      </Box>
      <Typography variant="h5" align="center">
        {`Мы не хотим обременять ${guest.family ? "вас" : guest.sex === "male" ? "тебя" : "тебя"} выбором подарка, поэтому будем рады подарку
        в конверте`}
      </Typography>
    </SectionContainer>
  );
};
