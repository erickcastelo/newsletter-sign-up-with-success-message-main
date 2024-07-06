import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import * as yup from "yup";
import "./Footer.scss";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../common/Form/Form";
import { useEmailForm } from "../hooks/EmailForm";

const emailSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Email is a required field")
      .matches(
        /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        "Please enter a valid email address"
      ),
  })
  .required();

export type Email = {
  email: string;
};

export const Footer = () => {
  const form = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(emailSchema),
  });

  const { handleSubmit } = form;

  const { update } = useEmailForm();

  const onSubmit: SubmitHandler<Email> = (data) => {
    update(data.email);
  };

  return (
    <footer className="footer-content">
      <Form useForm={form} onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          label="Email Address"
          placeholder="email@company.com"
        />
        <Button type="submit">Subscribe to monthly newsletter</Button>
      </Form>
    </footer>
  );
};
