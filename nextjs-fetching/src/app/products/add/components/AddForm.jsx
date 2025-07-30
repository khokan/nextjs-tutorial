"use client";
import React from "react";

const AddForm = () => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = {
      name: formData.get("name"),
      description: formData.get("description"),
      price: parseFloat(formData.get("price")),
    };

    console.log("Submitting product data:", productData);
    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (res.ok) {
      const data = await res.json();
      console.log("Product added:", data);
      alert("Product added successfully!");
      event.target.reset(); // Reset the form after successful submission
    } else {
      console.error("Failed to add product");
    }
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
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddForm;
