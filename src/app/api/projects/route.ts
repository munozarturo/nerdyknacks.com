import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET(req: Request) {
    const supabaseUrl = "https://gthzdqchencxhzmszgug.supabase.co";

    const supabaseKey = process.env.SUPABASE_KEY;
    if (!supabaseKey) {
        throw new Error("`SUPABASE_KEY` undefined.");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);

    const res = await supabase.from("todos").select();

    return NextResponse.json({
        route: "/api/projects",
        method: "GET",
        request: req,
        res: res,
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
