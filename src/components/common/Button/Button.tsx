import { ButtonHTMLAttributes, ReactNode } from "react";
import classNames from "classnames";
import "./Button.scss";

type ButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ ...props }: ButtonProps) => {
  const { children, ...restProps } = props;
  const className = restProps.className;

  return (
    <div className="button-content">
      <button
        {...restProps}
        className={classNames({
          className: !!className,
          "mt-6 w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-5 focus:outline-none":
            true,
        })}
      >
        {children}
      </button>
    </div>
  );
};
