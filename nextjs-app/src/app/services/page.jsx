import Link from "next/link";
import React from "react";

const page = () => {
  const data = [
    {
      id: 1,
      title: "Beautiful Landscape",
      description: "A stunning view of mountains at sunrise.",
      image: "https://picsum.photos/id/1015/600/400",
    },
    {
      id: 2,
      title: "City Skyline",
      description: "Nighttime skyline of a modern metropolis.",
      image: "https://picsum.photos/id/1018/600/400",
    },
    {
      id: 3,
      title: "Ocean Waves",
      description: "Calming waves crashing on a sandy beach.",
      image: "https://picsum.photos/id/1002/600/400",
    },
  ];
  return (
    <div>
      <h2 className="text-3xl text-blue-500">This is service page</h2>
      <div className="flex justify-center items-center gap-2">
        {data.map((d) => (
          <Link key={d.id} href={`/services/${d.id}`}>
            <img src={d.image}></img>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
