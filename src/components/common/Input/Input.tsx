/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormReturn } from "react-hook-form";
import "./Input.scss";
import classNames from "classnames";
import { InputHTMLAttributes } from "react";

export type InputProps = {
  useForm: UseFormReturn<any, any, undefined>;
  label?: string;
} & InputHTMLAttributes<HTMLInputElement>;
export const Input = ({ ...props }: InputProps) => {
  const { useForm, label, name, className, ...restProps } = props;

  const {
    formState: { errors },
    register,
  }: UseFormReturn<any, any, undefined> = useForm;

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
          "border-red-700 bg-red-100 text-red-700 placeholder-red-700 font-semibold":
            !!message,
          "bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500":
            true,
          className: !!className,
        })}
        {...restProps}
        {...register(name + "")}
      />
    </div>
  );
};
