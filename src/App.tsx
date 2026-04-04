import {
  AppLayout,
  Dress,
  Header,
  LaptopLayout,
  LineDivider,
  LocationComponent,
  MainContent,
  Questions,
  TextDivider,
  TimingComponent,
} from "./components";
import invitedImg from "./assets/invited.png";
import locationImg from "./assets/location.png";
import timingImg from "./assets/timing.png";
import dressImg from "./assets/dress.png";
import questionsImg from "./assets/questions.png";
import {
  Box,
  Divider,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function App() {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box>
      {isLaptop ? (
        <LaptopLayout>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              gap: "16px",
            }}
          >
            <Header />
            <MainContent />
            <Divider>
              <Typography variant="h4">Локация</Typography>
            </Divider>
            <LocationComponent />
            <Divider>
              <Typography variant="h4">Дресс-код</Typography>
            </Divider>
            <Dress />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "40%",
              gap: "16px",
            }}
          >
            <Divider>
              <Typography variant="h4">Тайминги</Typography>
            </Divider>
            <TimingComponent />
            <Divider>
              <Typography variant="h4">Анкета</Typography>
            </Divider>
            <Questions />
          </Box>
        </LaptopLayout>
      ) : (
        <AppLayout>
          <LineDivider />
          <Header />
          <TextDivider url={invitedImg} size="10em" />
          <MainContent />
          <TextDivider url={locationImg} size="5.5em" />
          <LocationComponent />
          <TextDivider url={timingImg} size="6.7em" />
          <TimingComponent />
          <TextDivider url={dressImg} size="6.7em" />
          <Dress />
          <TextDivider url={questionsImg} size="5.5em" />
          <Questions />
          <LineDivider />
        </AppLayout>
      )}
    </Box>
  );
}

export default App;
