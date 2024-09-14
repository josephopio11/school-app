import { validateRequest } from "@/auth";
import { Metadata } from "next";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const defaultSiteName = process.env.NEXT_PUBLIC_SITE_NAME! || "Quikref";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL! || "http://localhost:3000",
  ),

  title: {
    default: defaultSiteName,
    template: "%s |  " + defaultSiteName,
  },
};

const AuthLayout = async ({ children }: Props) => {
  const { user } = await validateRequest();
  // console.log("Current User", user);

  if (user) redirect("/");

  return <>{children}</>;
};

export default AuthLayout;
