import React from "react";

const Page = ({ params }) => {
  // const { id } = await params;
  const id = parseInt(params.id);
  console.log(id);
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

  const singleData = data.find((d) => d.id === id);
  console.log("data", singleData);
  if (!singleData) {
    return <div className="text-center text-red-500">Data not found.</div>;
  }

  return (
    <div className="text-center p-4">
      <h1 className="text-2xl font-bold mb-2">{singleData.title}</h1>
      <p className="mb-4 text-gray-600">{singleData.description}</p>
      <img
        className="mx-auto rounded shadow-md"
        src={singleData.image}
        alt={singleData.title}
      />
    </div>
  );
};

export default Page;
