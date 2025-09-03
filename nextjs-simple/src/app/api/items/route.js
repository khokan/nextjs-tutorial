import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const dynamic = "force-static";

export async function GET() {
  const data = await dbConnect("products").find({}).toArray();
  return Response.json({ data });
}

export async function POST(req) {
  const postData = await req.json();
  const result = await dbConnect("products").insertOne(postData);
  revalidatePath("/products");
  return Response.json({ result });
}
