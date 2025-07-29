"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const pathName = usePathname();
  if (pathName.includes("dashboard")) return;
  return (
    <div>
      <nav>
        <ul className="flex justify-center items-center gap-5">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href={"/posts"}>
            <li>Posts</li>
          </Link>
          <Link href={"/about"}>
            <li>About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
