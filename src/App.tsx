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

function App() {
  return (
    <AppLayout>
      <LineDivider />
      <Header />
      <TextDivider url="src/assets/invited.png" size="10em" />
      <MainContent />
      <TextDivider url="src/assets/location.png" size="5.5em" />
      <LocationComponent />
      <TextDivider url="src/assets/timing.png" size="6.7em" />
      <TimingComponent />
      <TextDivider url="src/assets/dress.png" size="6.7em" />
      <Dress />
      <TextDivider url="src/assets/questions.png" size="5.5em" />
      <Questions />
      <LineDivider />
    </AppLayout>
  );
}

export default App;
