import axios from "axios";
import { NextResponse } from "next/server";

const API_URL = process.env.NEXT_PUBLIC_MEALS_API;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1", 10);
  const pageSize = parseInt(searchParams.get("page_size") || "10", 10);

  try {
    const res = await axios.get(`${API_URL}/search.php`, { params: { s: "" } });
    const meals = res.data.meals || [];

    const start = (page - 1) * pageSize;
    const end = start + pageSize;
    const paginatedMeals = meals.slice(start, end);

    return NextResponse.json(paginatedMeals);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch meals", details: err },
      { status: 500 }
    );
  }
}
