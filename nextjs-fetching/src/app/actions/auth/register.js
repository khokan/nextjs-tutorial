"use server";

import dbConnect from "@/lib/dbConnect";
import bcrypt from "bcrypt";

export const registerUser = async (data) => {
  try {
    // Hash password
    const hashedPassword = await bcrypt.hash(data.Password, 10);

    const result = await await dbConnect("users-info").insertOne({
      Username: data.Username,
      Email: data.Email,
      Password: hashedPassword,
      createdAt: new Date(),
    });

    return {
      success: true,
      result: {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(),
      },
    };
  } catch (error) {
    console.log("Error in register action:", error);
    return { success: false, error: error.message };
  }
};
