"use client";

import {
  BookIcon,
  Calendar1Icon,
  DollarSignIcon,
  ForkKnife,
  LayoutDashboardIcon,
  SettingsIcon,
} from "lucide-react";
import { Button } from "./button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Sidebar() {
  const path = usePathname();

  const links = [
    {
      id: 1,
      label: "Dashboard",
      icon: LayoutDashboardIcon,
      href: "/dashboard",
    },
    { id: 2, label: "Daily Tasks", icon: Calendar1Icon, href: "/daily-tasks" },
    { id: 3, label: "Meals", icon: ForkKnife, href: "/meals" },
    { id: 4, label: "Expenses", icon: DollarSignIcon, href: "/expenses" },
    { id: 5, label: "Journal", icon: BookIcon, href: "/journal" },
  ];

  return (
    <div className="w-1/5 min-h-screen border-r border-r-gray-200 p-5 flex flex-col justify-between items-start">
      <div className="space-y-5 w-full">
        <div>
          <p className="text-4xl font-semibold">Atlas</p>
        </div>
        <div className="w-full flex flex-col gap-2.5">
          {links.map((link) => (
            <Link href={link.href as any} key={link.id} className="w-full">
              <Button
                key={link.id}
                className={cn(
                  "py-2 flex items-center gap-2 w-full",
                  path === link.href
                    ? ""
                    : "bg-transparent border-transparent text-[#1c39bb] hover:bg-gray-100",
                )}
              >
                <link.icon size={17} />
                {link.label}
              </Button>
            </Link>
          ))}
        </div>
        <div className="w-full h-px bg-gray-200" />
        <div></div>
      </div>
      <Button className="flex items-center gap-2 w-full py-2 bg-transparent border-transparent text-[#1c39bb]">
        <SettingsIcon size={17} />
        <p>Settings</p>
      </Button>
    </div>
  );
}
