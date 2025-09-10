const { default: dbConnect } = require("@/lib/dbConnect");

export const getProducts = async () => {
  try {
    return await dbConnect("products").find({}).toArray();
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};
