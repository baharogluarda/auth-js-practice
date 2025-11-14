"use server";

import { signIn } from "@/auth";
import { AuthSchema } from "@/helpers/auth-schema";
import {
  convertFormDataToJSON,
  response,
  transformYupErrors,
  YupValidationError,
} from "@/helpers/form-validation";
import { AuthError } from "next-auth";

export const loginAction = async (prevState, formData) => {
  const fields = convertFormDataToJSON(formData);

  try {
    AuthSchema.validateSync(fields, { abortEarly: false });

    await signIn("credentials", { ...fields, redirect: false });
  } catch (err) {
    if (err instanceof YupValidationError) {
      return transformYupErrors(err.inner, fields);
    } else if (err instanceof AuthError) {
      return response(false, fields, "Invalid credentials");
    }

    throw err;
  }
};

export const logoutAction = async (redirectTo = "/") => {
  await signOut({ redirectTo });
};
