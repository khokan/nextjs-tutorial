"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const MealSearchInput = () => {
  const [search, setSearch] = React.useState("");
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);

  useEffect(() => {
    const searchQuery = { search };
    console.log(searchQuery);
    const urlQuery = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQuery}`;
    router.push(url);
    console.log(router);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a meal..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default MealSearchInput;
