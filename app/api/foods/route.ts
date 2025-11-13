import axios from "axios";
import { NextResponse } from "next/server";
const Api = process.env.FOOD_API;
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") || "1";
  const page_size = searchParams.get("page_size") || "10";
  try {
    const res = await axios.get(`${Api}/search.pl`, {
      params: {
        search_terms: "food",
        page,
        page_size,
        json: true,
      },
    });
    return NextResponse.json(res.data.products || []);
  } catch (err) {
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 500 }
    );
  }
}
