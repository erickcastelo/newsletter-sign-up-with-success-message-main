/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHTMLAttributes, ReactNode, createContext } from "react";
import { UseFormReturn } from "react-hook-form";

export type UseForm = UseFormReturn<any, any, undefined>;

export type FormProps = {
  children: ReactNode;
  useForm: UseForm;
} & FormHTMLAttributes<HTMLFormElement>;

export const ContextApi = createContext<UseForm>({} as UseForm);

export const Form = ({ ...props }: FormProps) => {
  const { children, useForm, ...restProps } = props;

  return (
    <form {...restProps}>
      <ContextApi.Provider value={useForm}>{children}</ContextApi.Provider>
    </form>
  );
};
