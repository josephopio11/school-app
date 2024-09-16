import MainMenu from "@/components/shared/MainMenu";
import Navbar from "@/components/shared/Navbar";
import Image from "next/image";
import Link from "next/link";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen">
      <div className="w-[14%] p-4 md:w-[8%] lg:w-[16%] xl:w-[14%]">
        <Link
          href="/"
          className="flex items-center justify-center gap-2 lg:justify-start"
        >
          <Image src="/assets/logo.png" alt="Logo" width={32} height={32} />
          <span className="hidden text-lg font-bold lg:block">CoolShule</span>
        </Link>
        <MainMenu />
      </div>
      <div className="flex w-[86%] flex-col overflow-scroll bg-gray-200 dark:bg-black md:w-[92%] lg:w-[84%] xl:w-[86%]">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
