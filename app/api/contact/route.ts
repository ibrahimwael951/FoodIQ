import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return NextResponse.json(result);
  } catch (err) {
    console.error("Web3Forms error:", err);
    return NextResponse.json({ error: "Failed to send form" }, { status: 500 });
  }
}
