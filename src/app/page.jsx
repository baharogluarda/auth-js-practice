import { auth } from "@/auth";
import Header from "@/components/header/header";
import { AuthorizedUser } from "@/components/authorized-user/authorized-user";
import { LoginForm } from "@/components/login-form/login-form";
import { Spacer } from "@/components/shared/spacer";

export default async function HomePage() {
  const session = await auth();
  console.log("session", session);
  const isLoggedIn = !!session?.user;

  return (
    <>
      <Header session={session} />
      <Spacer mB="150"/>
      {isLoggedIn ? (
        <AuthorizedUser user={session.user.username} />
      ) : (
        <LoginForm />
      )}
    </>
  );
}
