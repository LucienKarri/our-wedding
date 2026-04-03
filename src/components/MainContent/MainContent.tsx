import { Paper, Typography } from "@mui/material";
import { DateCalendar, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/ru"; // Import the Russian locale
import { SectionContainer } from "../SectionContainer";

export const MainContent = () => {
  return (
    <SectionContainer>
      <Typography sx={{ textAlign: "center" }} variant="h5">
        Дорогие Карина и Дима, мы приглашаем вас разделить наше свадебное
        торжество вместе, которое состоится
      </Typography>
      <Typography color="primary" variant="h4">
        04.06.2026
      </Typography>

      <Paper>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
          <DateCalendar
            defaultValue={dayjs("2026-06-04")}
            views={["day"]}
            maxDate={dayjs("2026-06-31")}
            minDate={dayjs("2026-06-01")}
            sx={{
              borderRadius: "4px",
            }}
          />
        </LocalizationProvider>
      </Paper>
    </SectionContainer>
  );
};
