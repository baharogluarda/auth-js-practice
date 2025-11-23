import { auth } from "@/auth";
import Header from "@/components/header/header";
import { WelcomeUser } from "@/components/authorized-user/authorized-user";
import { LoginForm } from "@/components/login-form/login-form";

export default async function HomePage() {
  const session = await auth();
  console.log("session", session);
  const isLoggedIn = !!session?.user;

  return (
    <>
      <Header session={session}/>
      {isLoggedIn ? (
        <WelcomeUser user={session.user.username} />
      ) : (
        <LoginForm />
      )}
    </>
  );
}
