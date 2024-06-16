import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "../common/Button/Button";
import { Input } from "../common/Input/Input";
import * as yup from "yup";
import "./Footer.scss";
import { yupResolver } from "@hookform/resolvers/yup";

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

type Email = {
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
  const onSubmit: SubmitHandler<Email> = (data) => console.log(data);

  return (
    <footer className="footer-content">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <Input
          name="email"
          label="Email Address"
          placeholder="email@company.com"
          useForm={form}
        />

        <Button type="submit">Subscribe to monthly newsletter</Button>
      </form>
    </footer>
  );
};
