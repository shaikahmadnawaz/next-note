import { UserAuthForm } from "@/components/form/user-auth-form";
import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";
// import { getServerSession } from "next-auth/next";
// import { authOptions } from "@/lib/auth";
// import { redirect } from "next/navigation";

export const metadata = {
  title: "Register",
  description: "Register for an account to get started.",
};

export default async function RegisterPage() {
  // const session = await getServerSession(authOptions);
  // console.log(session);
  // if (session) {
  //   return redirect("/dashboard");
  // }
  return (
    <div className="container h-screen w-screen flex flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <Button>
          <>
            <Icons.chevronLeft className="mr-2 h-4 w-4" />
            Back
          </>
        </Button>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-5xl text-primary font-bold">Next Note</h1>
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-sm text-muted-foreground">
            Enter your email below to create your account
          </p>
        </div>
        <UserAuthForm />
      </div>
    </div>
  );
}
