"use client";
import { postSingleData } from "@/app/actions/postSingleData";
import { useRouter } from "next/navigation";
import React from "react";

const AddForm = () => {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
    };

    console.log("Submitting product data:", productData);
    // const { NEXT_PUBLIC_NODE_SERVER_URL } = process.env;
    // const res = await fetch(`${NEXT_PUBLIC_NODE_SERVER_URL}/api/items`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(productData),
    // });
    const data = await postSingleData(productData);
    // if (res.ok) {
    // const data = await res.json();
    console.log("Product added:", data);
    alert("Product added successfully!");
    event.target.reset(); // Reset the form after successful submission
    // } else {
    //   console.error("Failed to add product");
    // }
    router.push(`/products`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <input
          type="text"
          name="description"
          placeholder="Product Description"
        />
        <input type="number" name="price" placeholder="Product Price" />
        <button className="btn btn-primary cursor-pointer" type="submit">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddForm;
