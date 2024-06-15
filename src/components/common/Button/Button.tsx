import { ReactNode } from "react";
import "./Button.scss";

type ButtonProps = {
  children: ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <div className="button-content">
      <button
        type="button"
        className="mt-6 w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-5 focus:outline-none"
      >
        {children}
      </button>
    </div>
  );
};
