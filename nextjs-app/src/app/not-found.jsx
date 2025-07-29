import Link from "next/link";
import React from "react";

const pageNotFound = () => {
  return (
    <div>
      <h2>page not found </h2>
      <Link href={"/"}>
        <p>BAck to Home</p>
      </Link>
    </div>
  );
};

export default pageNotFound;
