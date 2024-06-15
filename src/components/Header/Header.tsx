import "./Header.scss";
import marc from "../../assets/illustration-sign-up-mobile.svg";

export const Header = () => {
  return (
    <header className="header-container">
      <img src={marc} />
    </header>
  );
};
