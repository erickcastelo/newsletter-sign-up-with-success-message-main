/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithRef, ReactNode } from "react";
import { FormProvider, UseFormReturn } from "react-hook-form";

export type UseForm = UseFormReturn<any, any, undefined>;

export type FormProps = {
  children: ReactNode;
  useForm: UseForm;
} & ComponentPropsWithRef<"form">;

export const Form = ({ ...props }: FormProps) => {
  const { children, useForm, ...restProps } = props;

  return (
    <FormProvider {...useForm}>
      <form {...restProps} noValidate>
        {children}
      </form>
    </FormProvider>
  );
};
