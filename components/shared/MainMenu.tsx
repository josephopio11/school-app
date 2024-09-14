import { userRole } from "@/lib/data";
import {
  BookCheck,
  BookOpenCheck,
  Calendar,
  ClipboardPenLine,
  Fence,
  GraduationCap,
  Home,
  ListCheck,
  LogOut,
  Megaphone,
  MessageCircleMore,
  Settings2,
  Speech,
  UserCircle2,
  UserRoundCheck,
  Users,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: Home,
        label: "Home",
        href: `/${userRole}`,
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: GraduationCap,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: UsersRound,
        label: "Students",
        href: "/list/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: Users,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: ClipboardPenLine,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon: Fence,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: Speech,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: BookOpenCheck,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: BookCheck,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: ListCheck,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: UserRoundCheck,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Calendar,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: MessageCircleMore,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Megaphone,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: UserCircle2,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: Settings2,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: LogOut,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const MainMenu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((item) => (
        <div className="flex flex-col gap-2" key={item.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {item.title}
          </span>
          {item.items.map((link) => {
            if (link.visible.includes(userRole)) {
              return (
                <Link
                  href={link.href}
                  key={link.label}
                  className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2"
                >
                  <link.icon size={20} className="text-gray-500" />
                  <span className="hidden lg:block">{link.label}</span>
                </Link>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
