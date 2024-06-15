import {} from "react";
import { Header } from "./components/Header/Header";
import "./App.scss";
import { Card } from "./components/Card/Card";
import { MainContent } from "./components/Content/MainContent";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <Card>
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
    </Card>
  );
}

export default App;
