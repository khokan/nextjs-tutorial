'use client';
import React from 'react';

const Register = () => {
    const handleSubmit = async(event) => {
        // event.preventDefault(); 
        const form = event.target;
        const Username = form.username.value;
        const Email = form.email.value;

        // Handle registration logic here
        console.log("Form submitted");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="flex flex-col items-center justify-center h-screen">
                    <h1 className="text-2xl font-bold mb-4">Register Page</h1>
                    <input
                        type="text"
                        placeholder="Username"
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="mb-4 p-2 border border-gray-300 rounded"
                    />
                    <input
                        type="password"
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
};

export default Register;