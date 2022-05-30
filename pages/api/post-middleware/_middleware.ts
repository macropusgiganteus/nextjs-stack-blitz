import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req) {
  const role = req.headers.get("authorization");
  console.log("Request : ", req);
  console.log("hHeader :", req.headers);

  if (!["user", "admin"].includes(role)) {
    return new Response(JSON.stringify({ message: "Not authenticated." }), {
      status: 401,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return NextResponse.next();
}
