import { auth } from "@/auth";
import Header from "@/components/header/header";
import { WelcomeUser } from "@/components/logged-in/welcome-user";
import { LoginForm } from "@/components/login-form/login-form";

export default async function HomePage() {
  const session = await auth();
  console.log("session", session);
  const isLoggedIn = !!session?.user;

  return (
    <>
      <Header />
      {isLoggedIn ? (
        <WelcomeUser user={session.user.username} />
      ) : (
        <LoginForm />
      )}
    </>
  );
}
