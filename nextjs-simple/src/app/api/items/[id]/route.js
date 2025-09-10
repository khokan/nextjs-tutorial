import dbConnect from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  console.log("id", p);
  const result = await dbConnect("products").findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json({ result });
}

export async function DELETE(req, { params }) {
  const p = await params;
  console.log("id", p);
  const result = await dbConnect("products").deleteOne({
    _id: new ObjectId(p.id),
  });
  return Response.json({ result });
}

export async function PATCH(req, { params }) {
  const p = await params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const result = await dbConnect("products").updateOne(
    filter,
    { $set: { ...postedData } },
    { upsert: true }
  );
  return Response.json({ result });
}
