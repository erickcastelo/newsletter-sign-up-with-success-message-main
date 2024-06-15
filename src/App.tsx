import {} from "react";
import { Header } from "./components/Header/Header";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { MainContent } from "./components/Content/MainContent";

function App() {
  return (
    <Card>
      <Header></Header>
      <MainContent></MainContent>
    </Card>
  );
}

export default App;
