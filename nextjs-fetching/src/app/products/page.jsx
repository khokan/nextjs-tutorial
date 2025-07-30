import React from "react";

const page = async () => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const result = await res.json();
  const products = result.data;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((item) => (
        <div key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default page;
