/* eslint-disable @typescript-eslint/no-explicit-any */
import { FormHTMLAttributes, ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

export type UseForm = UseFormReturn<any, any, undefined>;

export type FormProps = {
  children: ReactNode;
  useForm: UseForm;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ ...props }: FormProps) => {
  const { children, useForm, ...restProps } = props;

  return (
    <FormProvider {...useForm}>
      <form {...restProps}>{children}</form>
    </FormProvider>
  );
};
