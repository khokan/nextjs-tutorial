import dbConnect from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import React from "react";
import { getProducts } from "@/app/actions/getProductsPage";

const ProductsPage = async () => {
  // Uncomment the following lines if you want to use an API route instead
  // const { NEXT_PUBLIC_NODE_SERVER_URL } = process.env;
  // const res = await fetch(`${NEXT_PUBLIC_NODE_SERVER_URL}/api/items`, {
  //   cache: "force-cache",
  // });
  // const result = await res.json();
  // const products = result.data;

  const products = await getProducts();
  console.log("Fetched products:", products);
  // if (!products || products.length > 3) {
  //   redirect("/");
  // }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((item) => (
        <div key={item._id}>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
