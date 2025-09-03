import React from "react";

const getSinglePosts = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const data = await res.json();
  return data;
};

const Page = async ({ params }) => {
  const p = await params; // Ensure params is awaited`
  const data = await getSinglePosts(p.id);

  return (
    <div>
      <h2 className="text-2xl font-bold text-blue-500">{data.title}</h2>
      <p className="mt-2">{data.body}</p>
    </div>
  );
};

export default Page;
