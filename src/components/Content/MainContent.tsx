import { Email, Footer } from "../Footer/Footer";
import "./MainContent.scss";

type MainContentProps = {
  onEventSubmit: (data: Email) => void;
};
export const MainContent = ({ onEventSubmit }: MainContentProps) => {
  return (
    <section className="main-content margin-content">
      <section>
        <h1 className="title">Stay updated</h1>
        <p className="sub-title">
          Join 60,000+ product managers receiving monthly updates on:
        </p>
        <ul className="product-list">
          <li>Product discovery and building what matters</li>
          <li>Measuting to ensure updates are a success</li>
          <li>And much more!</li>
        </ul>
      </section>
      <Footer onEventSubmit={(data) => onEventSubmit(data)}></Footer>
    </section>
  );
};
