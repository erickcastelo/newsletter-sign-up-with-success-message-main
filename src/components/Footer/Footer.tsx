import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer-content">
      <Input
        name="emailAddress"
        label="Email Address"
        placeholder="email@company.com"
      />

      <Button>Subscribe to monthly newsletter</Button>
    </footer>
  );
};
