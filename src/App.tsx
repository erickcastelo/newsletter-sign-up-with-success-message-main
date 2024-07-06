import { Header } from "./components/Header/Header";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { MainContent } from "./components/Content/MainContent";
import { CardMessage } from "./components/CardMessage/CardMessage";
import { useEmailForm } from "./components/hooks/EmailForm";

function App() {
  const { email } = useEmailForm();

  return (
    <>
      {!email && (
        <Card>
          <Header></Header>
          <MainContent></MainContent>
        </Card>
      )}

      {!!email && <CardMessage />}
    </>
  );
}

export default App;
