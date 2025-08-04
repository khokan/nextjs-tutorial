"use server";
import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async (data) => {
  try {
    const result = await dbConnect("products").insertOne(data);
    revalidatePath("/products");
    return { success: true, result };
  } catch (error) {
    console.error("Error posting single data:", error);
    return { success: false, error: "Failed to post data" };
  }
};
