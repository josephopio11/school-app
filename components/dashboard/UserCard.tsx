import Image from "next/image";

type Props = {
  type: "student" | "teacher" | "parent" | "staff";
};

const UserCard = ({ type }: Props) => {
  return (
    <div className="min-w-[130px] flex-1 rounded-2xl border-b-2 border-white p-4 shadow-lg odd:bg-joPurple even:bg-joYellow dark:odd:bg-purple-800 dark:even:bg-yellow-700">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-white px-2 py-1 text-[10px] text-emerald-600">
          2024/25
        </span>
        <Image src={`/assets/${type}.png`} alt={type} width={20} height={20} />
      </div>
      <h1 className="my-4 text-2xl font-semibold">1,234</h1>
      <h2 className="text-xs font-medium capitalize text-gray-500">{type}s</h2>
    </div>
  );
};

export default UserCard;
