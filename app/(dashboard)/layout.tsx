import MainMenu from "@/components/shared/MainMenu";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex">
      <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%]  p-4">
        <Link
          href="/"
          className="flex items-center lg:justify-start justify-center gap-2"
        >
          <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden lg:block">CoolShule</span>
        </Link>
        <MainMenu />
      </div>
      <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#f7f8fa] dark:bg-black overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
