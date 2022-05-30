import type { NextApiRequest } from "next/server";
import cors from "../lib/cors";

export async function middleware(req) {
  // `cors` also takes care of handling OPTIONS requests
  return cors(
    req,
    new Response(JSON.stringify({ message: "Hello World!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  );
}
