import Image from "next/image";

type Props = {
  type: "student" | "teacher" | "parent" | "staff";
};

const UserCard = ({ type }: Props) => {
  return (
    <div className="rounded-2xl odd:bg-joPurple even:bg-joYellow p-4 flex-1 min-w-[130px] shadow-lg border-b-2 border-white">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-emerald-600">
          2024/25
        </span>
        <Image src={`/assets/${type}.png`} alt={type} width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1,234</h1>
      <h2 className="capitalize font-medium text-xs text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
