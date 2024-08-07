import "./Input.scss";
import classNames from "classnames";
import { ComponentPropsWithRef, forwardRef } from "react";
import { useFormContext } from "react-hook-form";
import { mergeRefs } from "react-merge-refs";

export type InputProps = {
  label?: string;
  name: string;
} & Omit<ComponentPropsWithRef<"input">, "onChange" | "onBlur">;
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { label, name, className, ...restProps } = props;
  const {
    formState: { errors },
    register,
  } = useFormContext();

  const { ref: refRegister, ...restRegister } = register(name);

  const message = errors && (errors?.[name ?? ""]?.message as string);

  return (
    <div className="input-content">
      {label && (
        <div className="label-content flex justify-between">
          <label
            htmlFor={name}
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            {label}
          </label>
          {!!message && (
            <small className="text-red-500 font-bold">{message}</small>
          )}
        </div>
      )}

      <input
        id={name}
        className={classNames({
          "border-red-700 !bg-red-100 text-red-700 placeholder-red-700 focus:outline-none focus:border-red-700 focus:border-2 font-semibold":
            !!message,
          "bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4":
            true,
          className: !!className,
        })}
        {...restProps}
        {...restRegister}
        ref={mergeRefs([refRegister, ref])}
      />
    </div>
  );
});
