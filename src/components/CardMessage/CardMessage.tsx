import { Button } from "../common/Button/Button";
import iconSuccess from "../../assets/icon-success.svg";
import "./CardMessage.scss";

type CardMessageProps = {
  onDismiss: () => void;
};
export const CardMessage = ({ onDismiss }: CardMessageProps) => {
  return (
    <div className="card-message-container">
      <div className="card-message-content">
        <img src={iconSuccess} />
        <h2 className="title">Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <b>ash@loremcompany</b>. Please
          open it and click the button inside to confirm your subscription
        </p>
      </div>

      <Button type="button" onClick={onDismiss}>
        Dismiss message
      </Button>
    </div>
  );
};
