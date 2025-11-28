import { auth } from "@/auth";
import Header from "@/components/header/header";
import { LoginForm } from "@/components/login-form/login-form";
import { Spacer } from "@/components/shared/spacer";
import { WelcomeBack } from "@/components/welcome-back/welcome-back";

export default async function HomePage() {
  const session = await auth();
  console.log("session", session);
  const isLoggedIn = !!session?.user;

  return (
    <>
      <Header session={session} />
      <Spacer mB="150"/>
      {isLoggedIn ? (
        <WelcomeBack user={session.user.username} />
      ) : (
        <LoginForm />
      )}
    </>
  );
}
