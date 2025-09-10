"use client";
import { registerUser } from "@/app/actions/auth/register";
import React from "react";

export default function Register() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const Username = form.username.value;
    const Email = form.email.value;
    const Password = form.password.value;

    const payload = { Username, Email, Password };

    const result = await registerUser(payload);
    console.log("Registration result:", result);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold mb-4">Register Page</h1>
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="mb-4 p-2 border border-gray-300 rounded"
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
