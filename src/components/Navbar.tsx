"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path ? "text-blue-500" : "";
  };

  return (
    <nav className="fixed left-0 top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            전형준&apos;s Portfolio
          </Link>

          <div className="flex space-x-8">
            <Link
              href="/about"
              className={`transition-colors hover:text-blue-500 ${isActive("/about")}`}
            >
              About Me
            </Link>

            <Link
              href="/archive"
              className={`transition-colors hover:text-blue-500 ${isActive("/archive")}`}
            >
              Archive
            </Link>
            <Link
              href="/project"
              className={`transition-colors hover:text-blue-500 ${isActive("/project")}`}
            >
              Project
            </Link>
            <Link
              href="/career"
              className={`transition-colors hover:text-blue-500 ${isActive("/career")}`}
            >
              Career
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
