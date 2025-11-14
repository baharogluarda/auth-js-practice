import TextInput from "../form-fields/text-input";
import { PasswordInput } from "../form-fields/password-input";
import { SubmitButton } from "../form-fields/submit-button";
import { initialState } from "@/helpers/form-validation";
import { useActionState } from "react";
import { Form } from "react-bootstrap";
import { loginAction } from "@/actions/auth-actions";

export const FormSection = () => {
  const [state, formAction] = useActionState(loginAction, initialState);

  return (
    <Form action={formAction}>
      <TextInput
        label="Username"
        name="username"
        error={state?.errors?.username}
        defaultValue={state?.data?.username ?? "user"}
      />
      <PasswordInput
        label="Password"
        name="password"
        error={state?.errors?.password}
        defaultValue={state?.data?.password ?? "pass"}
      />
      <SubmitButton title="Login" />
    </Form>
  );
};
