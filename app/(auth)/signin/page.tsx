import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginPage() {
  return <></>;
  // return (
  //   <main className="flex h-screen items-center justify-center p-5">
  //     <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl overflow-hidden shadow-2xl bg-card">
  //       <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10">
  //         <div className="space-y-1 text-center">
  //           <h1 className="text-3xl font-bold">Login to Quikref</h1>
  //           <p className="text-muted-foreground">
  //             Your ultimate destination for mastering anything!
  //           </p>
  //         </div>
  //         <div className="space-y-5">
  //           <LoginForm />
  //           <Link href="/signup" className="block text-center hover:underline">
  //             Don&apos;t have an account? Sign up.
  //           </Link>
  //         </div>
  //       </div>
  //       <Image
  //         src={loginImage}
  //         alt="Signup image"
  //         className="w-1/2 object-cover hidden md:block"
  //       />
  //     </div>
  //   </main>
  // );
}
