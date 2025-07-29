import dbConnect from "@/lib/dbConnect";

export const dynamic = "force-static";

export async function GET() {
  const data = await dbConnect("coffees").find({}).toArray();
  return Response.json({ data });
}

export async function POST(req) {
  const postData = await req.json();
  const result = await dbConnect("coffees").insertOne(postData);
  return Response.json({ result });
}
