import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json({
        route: "/api/projects",
        method: "GET",
        request: req,
    });
}

export async function POST(req: Request) {
    let body: Object | undefined;

    try {
        body = await req.json();
    } catch (e: unknown) {
        body = {};
    }

    return NextResponse.json({
        route: "/api/projects",
        method: "POST",
        body: body,
        request: req,
    });
}
