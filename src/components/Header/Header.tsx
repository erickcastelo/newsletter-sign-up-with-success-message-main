import "./Header.scss";
import logoMobile from "../../assets/illustration-sign-up-mobile.svg";
import logoDesktop from "../../assets/illustration-sign-up-desktop.svg";

export const Header = () => {
  return (
    <header className="header-container">
      <img className="logo-mobile" src={logoMobile} />
      <img className="logo-desktop" src={logoDesktop} />
    </header>
  );
};
