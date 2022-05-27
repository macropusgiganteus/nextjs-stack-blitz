import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req) {
    const role = req.headers.get("authorization");
    console.log("Request : ", req)
    console.log("hHeader :", req.headers)

    if (!["user", "admin"].includes(role) && false) {
        return new Response(JSON.stringify({ message: 'Not authenticated.' }), {
            status: 401,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }

    return NextResponse.next();
}