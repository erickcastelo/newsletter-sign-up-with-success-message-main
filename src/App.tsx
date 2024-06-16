import { useState } from "react";
import { Header } from "./components/Header/Header";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { MainContent } from "./components/Content/MainContent";
import { CardMessage } from "./components/CardMessage/CardMessage";

function App() {
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  return (
    <>
      {!isSuccess && (
        <Card>
          <Header></Header>
          <MainContent
            onEventSubmit={(data) => setIsSuccess(!!data.email)}
          ></MainContent>
        </Card>
      )}

      {isSuccess && <CardMessage onDismiss={() => setIsSuccess(false)} />}
    </>
  );
}

export default App;
