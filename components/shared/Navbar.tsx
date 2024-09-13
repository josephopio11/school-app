import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b shadow-md">
      <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2 py-1">
        <Image
          src={"/assets/search.png"}
          alt="Search Icon"
          width={14}
          height={14}
          className="aspect-square"
        />
        <input
          type="text"
          placeholder="Search..."
          className="w-[200px] p-2 bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-6 justify-end w-full">
        <div className="bg-white cursor-pointer rounded-full size-7 flex items-center justify-center">
          <Image
            src={"/assets/message.png"}
            alt="Logo"
            width={20}
            height={20}
            className="aspect-square"
          />
        </div>
        <div className="relative bg-white cursor-pointer rounded-full size-7 flex items-center justify-center">
          <Image
            src={"/assets/announcement.png"}
            alt="Logo"
            width={20}
            height={20}
            className="aspect-square"
          />
          <div className="absolute -top-3 -right-3 size-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
            2
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-xs leading-3 font-medium">John Doe</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Image
          src={"/assets/avatar.png"}
          alt="Avatar"
          width={36}
          height={36}
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default Navbar;
