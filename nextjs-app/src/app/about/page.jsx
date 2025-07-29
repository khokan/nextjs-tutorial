"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  const router = useRouter();
  const isLoggedIn = false;
  const handleNavigaion = () => {
    if (isLoggedIn) router.push("/about/address");
    else router.push("/");
  };

  return (
    <div>
      <h2 className="text-green-800">This is About page</h2>
      <Link href="/about/address">Address</Link>
      <p>
        <button type="button" onClick={handleNavigaion}>
          Press Me
        </button>
      </p>
    </div>
  );
};

export default page;
