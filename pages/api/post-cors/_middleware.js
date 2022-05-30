import { NextRequest, NextResponse } from "next/server";
import cors from "../../../lib/cors";

export function middleware(req) {
  // `cors` also takes care of handling OPTIONS requests
  return cors(
    req,
    // new Response(JSON.stringify({ message: "Hello World! (Accessible)" }), {
    //   status: 200,
    //   headers: { "Content-Type": "application/json" },
    // }),
    NextResponse.next(),
    {
      origin: "https://momo.com",
    }
  );
}
