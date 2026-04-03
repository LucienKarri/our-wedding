import {
  AppLayout,
  Dress,
  Header,
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

function App() {
  return (
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
  );
}

export default App;
